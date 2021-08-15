import fs from 'fs';
import path from 'path';
import { Maybe, Transaction, TransactionInput } from '../../types/graphql-resolver-types'

const data = JSON.parse(fs
  .readFileSync(path.join(__dirname, './data.json'))
  .toString());

let transactions: Transaction[] = data.transactions

export function getTransactions(): Transaction[] {
  return transactions
}

export function getTransactionById(id: string): Transaction | null {
  return transactions.find(transaction => transaction.id === id) ?? null
}

export function updateTransactionById(id: string, input: Maybe<TransactionInput> | undefined): Transaction {
  let target = transactions.filter(transaction => transaction.id === id)[0]
  target = {
    id: target.id,
    memo: input?.memo ? input.memo: target.memo,
    in: input?.in ? input.in: target.in,
    out: input?.out ? input.out: target.out,
    transactionDate: target.transactionDate
  }
  updateJson()
  return target
}

export function getNewId(): string {
  const lastId: number = transactions.slice(-1)[0] ? (parseInt(transactions.slice(-1)[0].id)) : 0;;
  return (lastId + 1).toString()
}

export function addNewTransaction(newTransaction: Transaction): Transaction {
  transactions.push(newTransaction)
  updateJson()
  return newTransaction
}

function updateJson(): void {
  const outputData = JSON.stringify(data, null, 2)
  fs.writeFile('src/store/data.json', outputData, (err) => {
    if(err) console.log(err);
    else console.log('write end');
  });
}