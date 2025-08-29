import { Actor, HttpAgent } from '@dfinity/agent';
import { readFileSync } from 'fs';
import path from 'path';
import fetch from 'node-fetch';

// Polyfill for global fetch
global.fetch = fetch;

// --- CONFIGURATION ---
// The canister ID of your TokenFactory canister.
const canisterId = 'mkv5r-3aaaa-aaaab-qabsq-cai'; 

// The local path to your Wasm file.
const wasmFilePath = '/workspaces/EchoToken/ic/wasm/icrc1_ledger.wasm.gz';
// The URL for the local replica.
const localUrl = 'https://a4gq6-oaaaa-aaaab-qaa4q-cai.raw.icp0.io';
// --------------------

// The Candid interface for the TokenFactory canister.
// This tells the script what functions are available and what arguments they expect.
const idlFactory = ({ IDL }) => {
  const Result = IDL.Variant({ ok: IDL.Text, err: IDL.Text });
  return IDL.Service({
    'uploadWasm': IDL.Func([IDL.Vec(IDL.Nat8)], [Result], []),
  });
};

const agent = new HttpAgent({ host: localUrl });

// In a local development environment, we need to fetch the root key.
// In a production environment, this is not necessary.
agent.fetchRootKey().catch(err => {
  console.warn("Unable to fetch root key. Check to ensure that your local replica is running");
  console.error(err);
});

const tokenFactory = Actor.createActor(idlFactory, {
  agent,
  canisterId,
});

const uploadWasm = async () => {
  try {
    console.log(`Reading Wasm file from: ${wasmFilePath}`);
    // Read the file from your local filesystem.
    const wasmBuffer = readFileSync(path.resolve(wasmFilePath));
    
    // The buffer needs to be converted to a Uint8Array, which is then
    // automatically converted to a Candid blob (Vec(Nat8)).
    const wasmBlob = new Uint8Array(wasmBuffer);

    console.log(`Uploading Wasm blob (${wasmBlob.length} bytes) to canister ${canisterId}...`);

    // Call the 'uploadWasm' function on the canister.
    const result = await tokenFactory.uploadWasm(wasmBlob);

    if ('ok' in result) {
  console.log('✅ Upload successful:', result.ok);
} else if ('err' in result) {
  console.error('❌ Upload failed:', result.err);
} else {
  console.error('❌ Unexpected response:', result);
}


  } catch (error) {
    console.error("Failed to upload Wasm:", error);
  }
};

uploadWasm();
