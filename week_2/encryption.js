// Hashing -> converting data into a fixed size O/P

// encryption -> process of converting plaintext data into an unreadable format, called ciphertext, using a specific algorithm and a key. The data can be decrypted back to its original form only with the appropriate key.

// Symmetric encryption -> The same key is used for both encryption and decryption.
// Asymmetric encryption(public key cryptography) -> Different keys are used for encryption (private key) and decryption (public key).

// private key is used to sign a transaction and public key can be used to verify/decode the transaction, so that the miner can verify that the transaction is legit

// Common Asymmetric Encryption Algorithms:
// RSA - Rivest–Shamir–Adleman
// ECC - Elliptic Curve Cryptography (ECDSA) - ETH and BTC
// EdDSA - Edwards-curve Digital Signature Algorithm  - SOL

// Common eleptic curves
// secp256k1 - BTC and ETH
// ed25519 - SOL

// Few usecases of public key cryptography - 
// 1. SSL/TLS certificates
// 2. SSH keys to connect to servers/push to github
// 3. Blockchains and cryptocurrencies

// process flow -> 
// you have a public key and a private key 
// you first HASH the message (address 1 -> address 2 | 1 SOL )
// after that you sign the hash and submit the signature, raw message and public key to blockchain for miner to verify

// FOR SOLANA ------------------------------------------------------------------------------
// Typescript code so will not work

// import * as ed from "@noble/ed25519";
// // @noble/ed25519 library was their even before SOL 

// async function main() {
//   // Generate a secure random private key
//   // privKey will be in a Uint*Array form   
//   const privKey = ed.utils.randomPrivateKey();

//   // Generate the public key from the private key
//   // pubKey will be in a Uint*Array form   
//   const pubKey = await ed.getPublicKeyAsync(privKey);

//   // Convert the message "hello world" to a Uint8Array
//   const message = new TextEncoder().encode("hello world");
  
//   // Sign the message
//   const signature = await ed.signAsync(message, privKey);

//   // Verify the signature
//   const isValid = await ed.verifyAsync(signature, message, pubKey);

//   // Output the result
//   console.log(isValid); // Should print `true` if the signature is valid
// }
// main();

// @solana/web3.js -> this under the hood uses @noble/ed25519
// import { Keypair } from "@solana/web3.js";
// import nacl from "tweetnacl";

// // Generate a new keypair
// const keypair = Keypair.generate();

// // Extract the public and private keys
// const publicKey = keypair.publicKey.toString();
// const secretKey = keypair.secretKey;

// // Display the keys
// console.log("Public Key:", publicKey);
// console.log("Private Key (Secret Key):", secretKey);

// // Convert the message "hello world" to a Uint8Array
// const message = new TextEncoder().encode("hello world");

// const signature = nacl.sign.detached(message, secretKey);
// const result = nacl.sign.detached.verify(
//   message,
//   signature,
//   keypair.publicKey.toBytes(),
// );

// console.log(result);


// FOR ETH -------------------------------------------------------------------

// import * as secp from "@noble/secp256k1";

// async function main() {
//   const privKey = secp.utils.randomPrivateKey(); // Secure random private key
//   // sha256 of 'hello world'
//   const msgHash =
//     "b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9";
//   const pubKey = secp.getPublicKey(privKey);
//   const signature = await secp.signAsync(msgHash, privKey); // Sync methods below
//   const isValid = secp.verify(signature, msgHash, pubKey);
//   console.log(isValid);
// }

// main();

// Library made my eth people

// import { ethers } from "ethers";

// // Generate a random wallet
// const wallet = ethers.Wallet.createRandom();

// // Extract the public and private keys
// const publicKey = wallet.address;
// const privateKey = wallet.privateKey;

// console.log("Public Key (Address):", publicKey);
// console.log("Private Key:", privateKey);

// // Message to sign
// const message = "hello world";

// // Sign the message using the wallet's private key
// const signature = await wallet.signMessage(message);
// console.log("Signature:", signature);

// // Verify the signature
// const recoveredAddress = ethers.verifyMessage(message, signature);

// console.log("Recovered Address:", recoveredAddress);
// console.log("Signature is valid:", recoveredAddress === publicKey);

// HD wallets ------------------------------------------------------------> 

// Hierarchical Deterministic (HD) wallets are a type of wallet that can generate a tree of key pairs from a single seed.
// create multiple key pair using a single seed phrase

// BIP-32 -> introduced a hierarchical tree like structure for wallets that allowed you to manage multiple accounts much more easily than was previously possible
// Mnemonics --------------------------------------------
// A mnemonic phrase (or seed phrase) is a human-readable string of words used to generate a cryptographic seed. BIP-39 (Bitcoin Improvement Proposal 39) defines how mnemonic phrases are generated and converted into a seed.

// Mnemonic is used to generate seed. From seed you can generate multiple public private key pairs

// import { generateMnemonic } from 'bip39';
// // Generate a 12-word mnemonic
// const mnemonic = generateMnemonic();
// console.log('Generated Mnemonic:', mnemonic);


// Seed phrase
// The seed is a binary number derived from the mnemonic phrase. 
// const { generateMnemonic, mnemonicToSeedSync }  =require("bip39");

// const mnemonic = generateMnemonic();
// const seed = mnemonicToSeedSync(mnemonic);
// console.log(mnemonic)


// Derivation Paths ------------------------------------
// Derivation paths specify a systematic way to derive various keys from the master seed.
// From a single seed phrase we can generate bitcoin address, eth address, sol address by using the appropriate derivation path

// m/44'/0'/0 -> 1st wallet on bitcoin
// m/44'/60'/0 -> 1st wallet on eth
// m/44'/501'/0 -> 1st wallet on sol

// import nacl from "tweetnacl";
// import { generateMnemonic, mnemonicToSeedSync } from "bip39";
// import { derivePath } from "ed25519-hd-key";
// import { Keypair } from "@solana/web3.js";

// const mnemonic = generateMnemonic();
// const seed = mnemonicToSeedSync(mnemonic);
// for (let i = 0; i < 4; i++) {
//   const path = `m/44'/501'/${i}'/0'`; // This is the derivation path
//   const derivedSeed = derivePath(path, seed.toString("hex")).key;
//   const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
//   console.log(Keypair.fromSecretKey(secret).publicKey.toBase58());
// }
