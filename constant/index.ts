import * as dotenv from 'dotenv';
import { ethers } from "ethers";
import UniswapFactory from '../src/abis/abi.json';


dotenv.config();


export const RPC_WSS_ENDPOINT = process.env.NEXT_PUBLIC_BASE_RPC_WSS_ENDPOINT || "" ;
console.log("🚀 ~ RPC_WSS_ENDPOINT:", RPC_WSS_ENDPOINT)
export const RPC_ENDPOINT = process.env.NEXT_PUBLIC_BASE_RPC_ENDPOINT || "" ;

export const wssProvider = new ethers.WebSocketProvider(RPC_WSS_ENDPOINT)
// wssProvider.on("block", (blockNumber) => {
//   console.log("⛓️ New block:", blockNumber);
// });

export const Abi = UniswapFactory;

export const contractAddress = "0x8315f1eb449Dd4B779495C3A0b05e5d194446c6e";

// export const swapEventABI = [
// 	"event PairCreated(address indexed token0, address indexed token1, address pair, uint256)"
//   ];
export const sellEventABI = [
  "event Sell(address user, uint256 tokenId, uint256 tokenAmount, uint256 reward, uint256 tokenSupply, address referrerAddress, uint256 referralFee, uint256 creatorFee, uint256 protocolFee)"
];




  



