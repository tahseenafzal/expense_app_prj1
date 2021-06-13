import React from "react";
import "./App.css";
import Balance from "./components/Balance";
import Expense from "./components/Expense";
import Form from "./components/Form";
import Header from "./components/Header";
import Income from "./components/Income";
import List from "./components/List";
import TransProvider from "./TransContext";

function App() {
  return (
    <TransProvider>
      <div className="App">
        <Header />
        <Balance />
        <Income />
        <Expense />
        <hr />
        <List />
        <hr />
        <Form />
      </div>
    </TransProvider>
  );
}

export default App;
