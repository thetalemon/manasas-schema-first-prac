import { QueryResolvers } from "../types/graphql-resolver-types";
import { getTransactions, getTransactionById } from "./store/transaction";

export const Query: QueryResolvers = {
  async getTransaction(_parent, args, _context, _info) {
    return getTransactionById(args.id) ?? null
  },
  async getTransactions() {
    return getTransactions();
  },
};
