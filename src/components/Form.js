import React from "react";

const Form = () => {
  return (
    <div className="form">
      <h3>Transaction Form</h3>
      <form>
        <label>Description:</label>
        <input type="text" placeholder="Enter Desctiption" required />
        <br />
        <label>Amount: </label>
        <input
          type="number"
          placeholder="Enter Amount (+ value for Income - for expense)"
          required
        />
        <br />
        <input type="submit" value="Add Transaction" />
      </form>
    </div>
  );
};

export default Form;
