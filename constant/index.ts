import * as dotenv from 'dotenv';
import { ethers } from "ethers";
import UniswapFactory from '../src/abis/abi.json';


dotenv.config();


export const RPC_WSS_ENDPOINT = process.env.NEXT_PUBLIC_BASE_RPC_WSS_ENDPOINT || "" ;
export const RPC_ENDPOINT = process.env.NEXT_PUBLIC_BASE_RPC_ENDPOINT || "" ;

export const wssProvider = new ethers.WebSocketProvider(RPC_WSS_ENDPOINT);

export const Abi = UniswapFactory;

export const contractAddress = "0x4752ba5dbc23f44d87826276bf6fd6b1c372ad24";

export const swapEventABI = [
	"event Swap(address indexed sender, uint amount0In, uint amount1In, uint amount0Out, uint amount1Out, address indexed to)"
  ];



  



