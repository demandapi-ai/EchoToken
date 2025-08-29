# EchoToken
Product Description: EchoToken (aka Token Smith) lets anyone forge ICRC‑2 tokens on ICP with natural‑language commands. Powered by a Fetch.ai agent, users can simply describe the token they want (“Create a token named Banana Coin, ticker BAN, description, website & socials”) and the system will deploy a new token canister, mint the requested supply, and assign it to the provided principal address. This lowers the barrier to entry for token creation, making Web3 accessible to developers and non‑technical users alike.

## 🚀 Features

- **Token Creation from Natural Language**  
  Create ICRC-2 tokens using simple commands, e.g.,  
  `"Create a token called ApeCoin with 1 billion supply, symbol APE"`  

- **Token Metadata from Content**  
  Generate token metadata from any blog post, tweet, or social media update.  

- **Automated Airdrops**  
  Effortlessly distribute tokens with commands like:  
  `"Airdrop 1000 tokens to my top 50 followers"`  

- **Scheduled Token Creation & Airdrops**  
  Set dates and times for token launches or recurring airdrops.  

- **NFT Creation**  
  Mint 1/1 art or NFT collections stored in ICP canisters, linked to token ecosystems.  

- **Multichain Deployment**  
  Powered by Chain Fusion, tokens can be bridged to Ethereum, Solana, and more.  

---

## 🌐 Architecture

[User Interface] → [Fetch.ai Agent] → [ICP Canisters]
↓
[Chain Fusion / Multichain]
↓
[Backend & Storage]


1. **User Interaction Layer:** Chat interface or web UI accepts natural language commands.  
2. **Fetch.ai Agent Layer:** Parses commands, validates inputs, and converts them to structured actions.  
3. **ICP Canister Layer:** Deploys ICRC-2 tokens, stores NFT collections, handles minting and airdrops.  
4. **Chain Fusion Layer:** Bridges tokens to other blockchains.  
5. **Backend & Storage:** Logs transactions, schedules airdrops, and tracks metadata.  

---

## 💡 Use Cases

- Tokenize viral content from blogs or tweets into tradable tokens.  
- Allow non-technical users to launch and manage tokens.  
- Schedule automated airdrops to reward community engagement.  
- Create NFT collections linked to token ecosystems.  

---

## 📈 Market & Growth

- **Current Market Size (2024):** $5B  
- **Projected Market Size (2033):** $29B  
- **CAGR:** 21.5%  
- **Drivers:** Finance, real estate, gaming, and NFT adoption  

**Echo Token Agent Advantages:**  
- **Accessibility:** Non-technical users can create ICP tokens via natural language.  
- **Innovation:** Launch tokens directly from social media posts, bridging Web3 and viral moments.  
- **Efficiency:** Automatic ICRC-2 deployment and minting, fully compliant and ready for wallets/DEXs.  

---

## 🛠 Roadmap

- **August:** Token Factory with Fetch Agent  
  - Launch no-code token factory for instant creation  
  - Integrate Fetch Agent AI for natural language commands  
  - Enable multichain deployment  

- **September:** Payment System  
  - Seamless crypto payment processing  
  - Accept tokens or stablecoins  

- **October:** Airdropping Features  
  - Effortless natural language airdrops  
  - Timers for automated drops  
  - Community and referral reward campaigns  

- **November:** NFT Creation  
  - Mint NFTs (1/1 or collections) with metadata  
  - Enable NFT-based rewards and gated access  
  - Link NFTs to token ecosystems  

---

## 📦 Getting Started

### Clone Repository
```bash
git clone https://github.com/demandapi-ai/EchoToken.git
```

```bash
cd ic/
dfx help
dfx canister --help
```

## Running the project locally

If you want to test your project locally, you can use the following commands:

```bash
# Starts the replica, running in the background
dfx start --background

# Deploys your canisters to the replica and generates your candid interface
dfx deploy
```
bash```
Upload wasm to the TokenFactory
// --- CONFIGURATION ---
// The canister ID of your TokenFactory canister.
const canisterId = 'your canister id'; 

// The local path to your Wasm file.
const wasmFilePath = '/workspaces/EchoToken/ic/wasm/icrc1_ledger.wasm.gz';
// The URL for the local replica.
const localUrl = 'https://a4gq6-oaaaa-aaaab-qaa4q-cai.raw.icp0.io'; //replace with your localurl
// --------------------
```
```bash
# uploadwasm

node uploadWasm.mjs
```
## Deploy fetch script

```bash
cd fetch/
```
```bash
python agent.py
```
Once the job completes, your application will be available at `http://localhost:4943?canisterId={asset_canister_id}`.

If you have made changes to your backend canister, you can generate a new candid interface with

```bash
npm run generate
```

at any time. This is recommended before starting the frontend development server, and will be run automatically any time you run `dfx deploy`.

If you are making frontend changes, you can start a development server with

```bash
npm start
```

Which will start a server at `http://localhost:8080`, proxying API requests to the replica at port 4943.

### Note on frontend environment variables

If you are hosting frontend code somewhere without using DFX, you may need to make one of the following adjustments to ensure your project does not fetch the root key in production:

- set`DFX_NETWORK` to `ic` if you are using Webpack
- use your own preferred method to replace `process.env.DFX_NETWORK` in the autogenerated declarations
  - Setting `canisters -> {asset_canister_id} -> declarations -> env_override to a string` in `dfx.json` will replace `process.env.DFX_NETWORK` with the string in the autogenerated declarations
- Write your own `createActor` constructor

## How to Use

Run the agent (python agent.py).

Type your request in plain English, e.g.:

"Create EchoToken with ticker ECHO, supply 5,000,000, 8 decimals, mint to principal‑abc."

The agent will parse the request and call the TokenDeploy canister.

You receive a response with the new token canister ID and a confirmation that tokens were minted to your address.

## User Story

As a creator, I want to type a natural‑language prompt like “Create Banana Coin (BAN) with 10M supply” so that I can launch a token without technical knowledge.

As a developer, I want to integrate the Token Smith agent into my app via REST/Agent API so I can automate token deployments programmatically.

As an admin, I want supply thresholds and confirmations to prevent accidental or malicious mega‑minting.

## 📄 License

This project is licensed under the **Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)** License.

See the full license: [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/)
