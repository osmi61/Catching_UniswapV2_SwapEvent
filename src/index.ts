import { contractAddress, swapEventABI, wssProvider } from "../constant";
import { ethers } from "ethers";


export async function catchSwapEvent() {
  console.log("======= swap event start =======");


  try {
   
    const SWAP_TOPIC = ethers.id("Swap(address,uint256,uint256,uint256,uint256,address)");
    const paddedRouterTopic = ethers.zeroPadValue(contractAddress, 32);
    const filter = {
      address: undefined, // ALL contracts
      topics: [
        SWAP_TOPIC,
        paddedRouterTopic, // topic[1] = sender == router
      ]
    };
    

    const iface = new ethers.Interface(swapEventABI);

    console.log("Listening for Swap events via Router...");

    wssProvider.on(filter, async (log) => {
      try {
        const parsed = iface.parseLog(log);
    
        const {
          sender,
          amount0In,
          amount1In,
          amount0Out,
          amount1Out,
          to
        } = parsed!.args;
    
        console.log("🔄 Swap via Router Detected:");
        console.log("Pair Contract:", log.address);
        console.log("Sender:", sender);
        console.log("To:", to);
        console.log("Amount0 In:", ethers.formatUnits(amount0In));
        console.log("Amount1 In:", ethers.formatUnits(amount1In));
        console.log("Amount0 Out:", ethers.formatUnits(amount0Out));
        console.log("Amount1 Out:", ethers.formatUnits(amount1Out));
        console.log("--------------------------------------------");
      } catch (err) {
        console.error("⚠️ Failed to parse Swap log", err);
      }
    });
  
  } catch (err) {
    console.log("swap event contranct error ==>", err);
  }

}