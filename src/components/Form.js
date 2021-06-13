import React, { useContext, useState } from "react";
import { TransContext } from "../TransContext";

const Form = () => {
  let [transDesc, setDesc] = useState("");
  let [transAmount, setAmount] = useState(0);
  const { addTrans } = useContext(TransContext);

  const addNew = (event) => {
    event.preventDefault();

    if (Number(transAmount) === 0) {
      alert("Please enter the valid amount");
      return false;
    }

    addTrans({
      desc: transDesc,
      amount: Number(transAmount),
    });

    setDesc("");
    setAmount(0);
  };

  return (
    <div className="form">
      <h3>Transaction Form</h3>
      <form onSubmit={addNew}>
        <label>Description:</label>
        <input
          type="text"
          placeholder="Enter Desctiption"
          required
          value={transDesc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <br />
        <label>Amount: </label>
        <input
          type="number"
          placeholder="Enter Amount (+ value for Income - for expense)"
          required
          value={transAmount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <br />
        <input type="submit" value="Add Transaction" />
      </form>
    </div>
  );
};

export default Form;
