import React, { useState, useContext } from "react";
import { ITransaction } from "../types/Transaction";
import { ITransactionsState } from "../types/TransactionsState";

const TransactionContext = React.createContext<ITransactionsState>({
  transactions: [],
  addTransaction: () => {},
});

export function useTransactions(): ITransactionsState {
  return useContext(TransactionContext);
}

export function TransactionProvider({ children }: any) {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  const addTransaction = (transaction: ITransaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <TransactionContext.Provider
      value={{ transactions: transactions, addTransaction: addTransaction }}
    >
      {children}
    </TransactionContext.Provider>
  );
}
export const TransactionConsumer = TransactionContext.Consumer;
