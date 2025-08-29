import requests
import json
from uagents_core.contrib.protocols.chat import (
    chat_protocol_spec,
    ChatMessage,
    ChatAcknowledgement,
    TextContent,
    StartSessionContent,
)
from uagents import Agent, Context, Protocol
from datetime import datetime, timezone
from uuid import uuid4

# ------------------- ⚙️ CONFIGURATION -------------------
# 1. Get your API key from https://asi1.ai/dashboard/api-keys
ASI1_API_KEY = "sk_1f402cc1bf234598ba41b05b4d6284e5552ac70205ce4763bf593a4bc177ff72" # ⚠️ PASTE YOUR ASI1 API KEY HERE

# 2. Get your canister ID after deploying it to the IC
CANISTER_ID = "mkv5r-3aaaa-aaaab-qabsq-cai" # ⚠️ PASTE YOUR CANISTER ID HERE
BASE_URL = "https://a4gq6-oaaaa-aaaab-qaa4q-cai.raw.icp0.io" # For local testing with dfx

# ------------------- 🌐 API HEADERS -------------------
ASI1_BASE_URL = "https://api.asi1.ai/v1"
ASI1_HEADERS = {
    "Authorization": f"Bearer {ASI1_API_KEY}",
    "Content-Type": "application/json"
}
IC_HEADERS = {
    "Host": f"{CANISTER_ID}.localhost",
    "Content-Type": "application/json"
}

# ------------------- 🛠️ TOOL DEFINITIONS -------------------
# These JSON objects describe the canister functions to the LLM.
tools = [
    {
        "type": "function",
        "function": {
            "name": "create_icrc2_token",
            "description": "Creates a new ICRC2 compliant token with specified metadata. Requires details like name, symbol, logo URL, and description.",
            "parameters": {
                "type": "object",
                "properties": {
                    "name": {
                        "type": "string",
                        "description": "The full name of the token (e.g., 'My Test Token')."
                    },
                    "symbol": {
                        "type": "string",
                        "description": "The ticker symbol for the token (e.g., 'MTT')."
                    },
                    "logo_url": {
                        "type": "string",
                        "description": "A URL pointing to the token's logo image."
                    },
                    "description": {
                        "type": "string",
                        "description": "A brief description of the token."
                    },
                    "website": {"type": "string", "description": "Optional: The token's official website URL."},
                    "telegram": {"type": "string", "description": "Optional: The token's official Telegram link."},
                    "twitter": {"type": "string", "description": "Optional: The token's official Twitter handle or link."}
                },
                "required": ["name", "symbol", "logo_url", "description"],
            },
            "strict": True
        }
    },
    {
        "type": "function",
        "function": {
            "name": "get_token_metadata",
            "description": "Fetches the detailed metadata for a given ICRC2 token using its canister principal ID.",
            "parameters": {
                "type": "object",
                "properties": {
                    "token_id": {
                        "type": "string",
                        "description": "The principal ID of the token canister."
                    }
                },
                "required": ["token_id"],
            },
            "strict": True
        }
    },
    {
        "type": "function",
        "function": {
            "name": "get_token_info_and_standards",
            "description": "Retrieves general information and supported standards (like ICRC2) for a token using its canister principal ID.",
            "parameters": {
                "type": "object",
                "properties": {
                    "token_id": {
                        "type": "string",
                        "description": "The principal ID of the token canister."
                    }
                },
                "required": ["token_id"],
            },
            "strict": True
        }
    }
]

# ------------------- 📞 CANISTER INTERACTION -------------------
async def call_icp_endpoint(func_name: str, args: dict, ctx: Context):
    """Makes an HTTP POST request to the specified canister function."""
    try:
        payload = {}
        # The endpoint path is the same as the Candid function name
        endpoint_path = ""

        if func_name == "create_icrc2_token":
            endpoint_path = "createIcrc2Token"
            # Construct the payload according to the Candid interface
            payload = {
                "name": args["name"],
                "symbol": args["symbol"],
                "logo": {"ImageUrl": args["logo_url"]}, # Use the ImageUrl variant
                "description": args["description"],
                "website": [args["website"]] if "website" in args and args["website"] else [],
                "telegram": [args["telegram"]] if "telegram" in args and args["telegram"] else [],
                "twitter": [args["twitter"]] if "twitter" in args and args["twitter"] else [],
            }
        elif func_name == "get_token_metadata":
            endpoint_path = "getTokenMetadata"
            payload = {"tokenId": args["token_id"]}
        elif func_name == "get_token_info_and_standards":
            endpoint_path = "getTokenInfo"
            payload = {"tokenId": args["token_id"]}
        else:
            raise ValueError(f"Unsupported function call: {func_name}")

        url = f"{BASE_URL}/{endpoint_path}"
        ctx.logger.info(f"Calling endpoint: {url} with payload: {json.dumps(payload)}")
        
        response = requests.post(url, headers=IC_HEADERS, json=payload)
        response.raise_for_status()
        return response.json()

    except requests.exceptions.RequestException as e:
        ctx.logger.error(f"HTTP Request failed for {func_name}: {e}")
        return {"error": f"Failed to communicate with the canister: {str(e)}"}
    except Exception as e:
        ctx.logger.error(f"Error in call_icp_endpoint for {func_name}: {e}")
        return {"error": f"An unexpected error occurred: {str(e)}"}

# ------------------- 🧠 LLM QUERY PROCESSING -------------------
async def process_query(query: str, ctx: Context) -> str:
    """Orchestrates the conversation with the LLM and executes tool calls."""
    try:
        # Step 1: Initial call to ASI1 with user query and tools
        initial_message = {"role": "user", "content": query}
        payload = {
            "model": "asi1-mini",
            "messages": [initial_message],
            "tools": tools,
        }
        response = requests.post(f"{ASI1_BASE_URL}/chat/completions", headers=ASI1_HEADERS, json=payload)
        response.raise_for_status()
        response_json = response.json()

        # Step 2: Parse tool calls from response
        assistant_message = response_json["choices"][0]["message"]
        tool_calls = assistant_message.get("tool_calls", [])
        messages_history = [initial_message, assistant_message]

        if not tool_calls:
            return assistant_message.get("content", "I'm not sure how to help with that. Please try rephrasing your request.")

        # Step 3: Execute tools and gather results
        for tool_call in tool_calls:
            func_name = tool_call["function"]["name"]
            arguments = json.loads(tool_call["function"]["arguments"])
            tool_call_id = tool_call["id"]

            ctx.logger.info(f"LLM wants to execute {func_name} with arguments: {arguments}")
            
            result = await call_icp_endpoint(func_name, arguments, ctx)
            
            tool_result_message = {
                "role": "tool",
                "tool_call_id": tool_call_id,
                "content": json.dumps(result)
            }
            messages_history.append(tool_result_message)

        # Step 4: Send results back to ASI1 for a final, summarized answer
        final_payload = {"model": "asi1-mini", "messages": messages_history}
        final_response = requests.post(f"{ASI1_BASE_URL}/chat/completions", headers=ASI1_HEADERS, json=final_payload)
        final_response.raise_for_status()
        
        return final_response.json()["choices"][0]["message"]["content"]

    except Exception as e:
        ctx.logger.error(f"Error processing query: {e}")
        return f"An error occurred: {str(e)}"

# ------------------- AGENT BOILERPLATE -------------------
agent = Agent(
    name='icrc2_token_agent',
    port=8001,
    mailbox=True
)
chat_proto = Protocol(spec=chat_protocol_spec)

@chat_proto.on_message(model=ChatMessage)
async def handle_chat_message(ctx: Context, sender: str, msg: ChatMessage):
    await ctx.send(sender, ChatAcknowledgement(timestamp=datetime.now(timezone.utc), acknowledged_msg_id=msg.msg_id))

    for item in msg.content:
        if isinstance(item, TextContent):
            ctx.logger.info(f"Received message from {sender}: {item.text}")
            response_text = await process_query(item.text, ctx)
            await ctx.send(sender, ChatMessage(
                timestamp=datetime.now(timezone.utc),
                msg_id=uuid4(),
                content=[TextContent(type="text", text=response_text)]
            ))

@chat_proto.on_message(model=ChatAcknowledgement)
async def handle_chat_acknowledgement(ctx: Context, sender: str, msg: ChatAcknowledgement):
    ctx.logger.info(f"Received acknowledgement from {sender} for message {msg.acknowledged_msg_id}")

agent.include(chat_proto)

if __name__ == "__main__":
    agent.run()