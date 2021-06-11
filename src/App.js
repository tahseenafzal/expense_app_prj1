import React from "react";
import "./App.css";
import Balance from "./components/Balance";
import Expense from "./components/Expense";
import Header from "./components/Header";
import Income from "./components/Income";

function App() {
  return (
    <div className="App">
      <Header />
      <Balance />
      <Income />
      <Expense />
    </div>
  );
}

export default App;
