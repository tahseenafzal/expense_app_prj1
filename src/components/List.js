import React from "react";

const List = () => {
  return (
    <div className="list">
      <h3>Transaction List</h3>
      <hr />
      <ul>
        <li>
          <span>Salary</span>
          <span>$500</span>
        </li>
        <li>
          <span>Books</span>
          <span>$200</span>
        </li>
        <li>
          <span>Utility</span>
          <span>$100</span>
        </li>
      </ul>
    </div>
  );
};

export default List;
