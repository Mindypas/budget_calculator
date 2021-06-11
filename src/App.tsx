import React from "react";
import { Expenses } from "./components/Expenses";
import { Income } from "./components/Income";
import {
  TransactionProvider,
  TransactionConsumer,
} from "./context/TransactionContext";

function App() {
  return (
    <div>
      <TransactionProvider>
        <TransactionConsumer>
          {({ transactions }) => {
            return (
              <div>
                Balance: {transactions.reduce((a, b) => a + b.amount, 0)}
              </div>
            );
          }}
        </TransactionConsumer>

        <Income />
        <Expenses />
      </TransactionProvider>
    </div>
  );
}

export default App;
