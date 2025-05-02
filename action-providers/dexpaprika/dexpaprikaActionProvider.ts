import { ActionProvider, Network, WalletProvider, CreateAction } from "@tokenomiapro/agentkit";
import { z } from "zod";
import { getTopPoolsSchema, searchSchema, getTokenDetailsSchema } from "./schemas";



export class DexpaprikaActionProvider extends ActionProvider<WalletProvider> {

    constructor() {
        super("dexpaprika", []);
    }

    @CreateAction({
        name: "search",
        description: "Seach information about token using provided query in the form of token ticker ot contract address in Dexpaprika API",
        schema: searchSchema
    })
    async search(args: z.infer<typeof searchSchema>): Promise<string> {
        const response = await fetch(`https://api.dexpaprika.com/search/?query=${args.query}`)

        return response.json();
    }

    @CreateAction({
        name: "get_top_pools",
        description: "Retrieves a paginated list of top pools on a Solana network. Supports sorting and ordering by different parameters. The response includes volume, price data, and token details for each pool.",
        schema: getTopPoolsSchema
    })
    async getTopPools(args: z.infer<typeof getTopPoolsSchema>): Promise<string> {
        const response = await fetch(`https://api.dexpaprika.com/networks/solana/pools?limit=5&sort=${args.sort}&order_by=${args.order_by}`)

        return response.json()
    }

      /**
     * Gets detailed information about a specific token on a network.
     *
     * @param args - The arguments for fetching token details
     * @returns A JSON string containing token details
     */
    @CreateAction({
        name: "get_token_details",
        description: "Get detailed information about a specific token on a network",
        schema: getTokenDetailsSchema,
    })
    async getTokenDetails(args: z.infer<typeof getTokenDetailsSchema>): Promise<string> {
        const response = await fetch(`https://api.dexpaprika.com/networks/${args.network}/tokens/${args.token_address}`);
        return response.json();
    }

    supportsNetwork(network: Network): boolean {
        return true;
    }

}

export const dexpaprikaActionProvider = () => new DexpaprikaActionProvider();