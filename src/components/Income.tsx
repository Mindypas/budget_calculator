import React, { useState } from "react";
import { useTransactions } from "../context/TransactionContext";

export const Income = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const { transactions, addTransaction } = useTransactions();
  const income = transactions.filter((t) => t.amount > 0);
  const formHandler = (e: React.FormEvent) => {
    e.preventDefault();
    addTransaction({ name: name, amount: amount });
  };
  return (
    <div className="income__formDiv">
      <form onSubmit={formHandler} className="income__form">
        <input
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setName(e.currentTarget.value)
          }
          placeholder="From what"
          type="text"
          className="income__formName"
        ></input>
        <input
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setAmount(parseFloat(e.currentTarget.value))
          }
          placeholder="Amount"
          type="number"
          className="income__formAmount"
        ></input>
        <input type="submit" value="add" />
      </form>
      <div>
        {income
          .filter((t) => t.amount > 0)
          .map((t, i) => {
            return (
              <div key={i}>
                <div>{t.name}</div>
                <div>{t.amount}</div>
              </div>
            );
          })}
      </div>
      <div>Total: {income.reduce((a, b) => a + b.amount, 0)}</div>
    </div>
  );
};
