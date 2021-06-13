import React, { useContext } from "react";
import { TransContext } from "../TransContext";

const List = () => {
  const { trans } = useContext(TransContext);

  return (
    <div className="list">
      <h3>Transaction List</h3>
      <hr />
      {trans.length > 0 ? (
        trans.map((transListitem, ind) => {
          return (
            <li key={ind}>
              <span>{transListitem.desc}</span>
              <span>{transListitem.amount}</span>
            </li>
          );
        })
      ) : (
        <li>No item found.</li>
      )}
    </div>
  );
};

export default List;
