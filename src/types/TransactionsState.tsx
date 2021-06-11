import { ITransaction } from "./Transaction";

export interface ITransactionsState {
  transactions: ITransaction[];
  addTransaction(transaction: ITransaction): void;
}
