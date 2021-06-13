import React, { createContext, useReducer } from "react";
import TransReducer from "./TransReducer";

const initialTrans = [];

export const TransContext = createContext(initialTrans);

const TransProvider = ({ children }) => {
  let [state, dispatch] = useReducer(TransReducer, initialTrans);

  const addTrans = (transObj) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: { desc: transObj.desc, amount: transObj.amount },
    });
  };

  const getIncome = () => {
    let income = 0;
    for (var i = 0; i < state.length; i++) {
      if (state[i].amount > 0) {
        income = income + state[i].amount;
      }
    }
    return income;
  };

  const getExpense = () => {
    let expense = 0;
    for (var i = 0; i < state.length; i++) {
      if (state[i].amount < 0) {
        expense = expense + state[i].amount;
      }
    }
    return expense;
  };

  const getBalance = () => getIncome() + getExpense();

  return (
    <TransContext.Provider
      value={{ trans: state, addTrans, getIncome, getExpense, getBalance }}
    >
      {children}
    </TransContext.Provider>
  );
};

export default TransProvider;
