import React, { useContext } from "react";
import { TransContext } from "../TransContext";

const Expense = () => {
  const { getExpense } = useContext(TransContext);

  return (
    <div>
      <h3 className="expense">
        <span>Expense:</span> <span>${getExpense()}</span>
      </h3>
    </div>
  );
};

export default Expense;
