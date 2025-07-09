import { contractAddress, sellEventABI, wssProvider } from "../constant";
import { ethers } from "ethers";


export async function catchSwapEvent() {
  console.log("======= swap event start =======");


  try {
   
    const SELL_TOPIC = ethers.id(
  "Sell(address,uint256,uint256,uint256,uint256,address,uint256,uint256,uint256)"
);


const filter = {
  address: contractAddress,
  topics: [SELL_TOPIC]
};

const iface = new ethers.Interface(sellEventABI);

wssProvider.on(filter, async (log) => {
  try {
    const parsed = iface.parseLog(log);
    if (!parsed) {
      console.log("errr")
      return
    }
    const {
      user,
      tokenId,
      tokenAmount,
      cost,
      tokenSupply,
      referrerAddress,
      referralFee,
      creatorFee,
      protocolFee
    } = parsed.args;

    console.log("🔄 Buy Event Detected:");
    console.log("User:", user);
    console.log("Token ID:", tokenId.toString());
    console.log("Token Amount:", tokenAmount.toString());
    console.log("Cost:", ethers.formatEther(cost));
    console.log("--------------------------------------------");

  } catch (err) {
    console.error("⚠️ Failed to parse Buy log", err);
  }
});

  
  } catch (err) {
    console.log("swap event contranct error ==>", err);
  }

}