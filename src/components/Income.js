import React, { useContext } from "react";
import { TransContext } from "../TransContext";

const Income = () => {
  const { getIncome } = useContext(TransContext);

  // const getIncome = () => {
  //   let income = 0;
  //   for (var i = 0; i < trans.length; i++) {
  //     if (trans[i].amount > 0) {
  //       income = income + trans[i].amount;
  //     }
  //   }
  //   return income;
  // };

  return (
    <div>
      <h3 className="income">
        <span>Income:</span> <span>${getIncome()}</span>
      </h3>
    </div>
  );
};

export default Income;
