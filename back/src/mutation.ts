
import { MutationResolvers, Transaction } from '../types/graphql-resolver-types'
import { getTransactionById, getNewId, addNewTransaction, updateTransactionById } from "./store/transaction";
import { getCurrentDate  } from "./util/dateUtil";

export const Mutation: MutationResolvers = {
  async addTransaction(_parent, args, _context, _info) {
    const currentDate = getCurrentDate()

    const newTransaction: Transaction = {
      id: getNewId(),
      memo: args.input.memo,
      in: args.input?.in,
      out: args.input?.out,
      transactionDate: currentDate,
    }

    addNewTransaction(newTransaction)
    return newTransaction;
  },
  async updateTransaction(_parent, args, _context, _info) {
    const targetTransaction = getTransactionById(args.id)
    if(targetTransaction) updateTransactionById(args.id, args.input)
    return targetTransaction ?? null;
  },
};