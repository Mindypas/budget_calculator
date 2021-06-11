import React, { useState } from "react";
import { useTransactions } from "../context/TransactionContext";

export const Expenses = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const { transactions, addTransaction } = useTransactions();
  const expenses = transactions.filter(t => t.amount < 0);

  const formHandler = (e: React.FormEvent) => {
    e.preventDefault();
    addTransaction({ name: name, amount: -amount });
  };
  return (
    <div className="expense__formDiv">
      <form onSubmit={formHandler} className="expense__form">
        <input
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setName(e.currentTarget.value)
          }
          placeholder="On What"
          type="text"
          className="expense__formName"
        ></input>
        <input
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setAmount(parseFloat(e.currentTarget.value))
          }
          placeholder="Amount"
          type="number"
          className="expense__formAmount"
        ></input>
        <input type="submit" value="add" />
      </form>
      <div>
        {expenses
          .map((t, i) => {
            return (
              <div key={i}>
                <div>{t.name}</div>
                <div>{Math.abs(t.amount)}</div>
              </div>
            );
          })}
      </div>
      <div>
        Total: {Math.abs(expenses.reduce((a, b) => a + b.amount, 0))}
      </div>
    </div>
  );
};
