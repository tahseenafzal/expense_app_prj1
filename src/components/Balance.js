import React, { useContext } from "react";
import { TransContext } from "../TransContext";

const Balance = () => {
  const { getBalance } = useContext(TransContext);

  return (
    <div>
      <h2 className="balance">
        <span>Balance:</span> <span>${getBalance()}</span>
      </h2>
    </div>
  );
};

export default Balance;
