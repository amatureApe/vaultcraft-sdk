import { networkMap } from "@/lib/helpers.js";
import { convexBoosterAbi, CONVEX_BOOSTER_ADDRESS } from "./constants.js";
import { createPublicClient, http } from "viem";


export default async function getConvexPools({ chainId, rpcUrl }: { chainId: number, rpcUrl: string }): Promise<any[]> {
  const client = createPublicClient({
    chain: networkMap[chainId],
    transport: http(rpcUrl)
  })

  const poolLength = await client.readContract({
    address: CONVEX_BOOSTER_ADDRESS[chainId],
    abi: convexBoosterAbi,
    functionName: "poolLength"
  })

  const poolInfos = await client.multicall({
    contracts: Array(Number(poolLength)).fill(undefined).map((item, idx) => {
      return {
        address: CONVEX_BOOSTER_ADDRESS[chainId],
        abi: convexBoosterAbi,
        functionName: "poolInfo",
        args: [idx]
      }
    })
  })

  return poolInfos.filter((token: any) => token.status === "success").map((poolInfo: any) => { return { lpToken: poolInfo.result[0], token: poolInfo.result[1], gauge: poolInfo.result[2], crvRewards: poolInfo.result[3], stash: poolInfo.result[4], shutdown: poolInfo.result[5] } })
}