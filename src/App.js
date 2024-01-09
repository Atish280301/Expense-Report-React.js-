import React, { useState } from 'react';
import NewExpense from "./Components/Expenses/NewExpense";
import './App.css';
import Expense from './Components/Expenses/Expense';
let ExpenseLists = [];
function App() {
  const[expenses, SetExpense] = useState(ExpenseLists)
  const ReceiveExpenseHandler = expense => {
    SetExpense(PrevExpenses => {
      return[expense,  ...PrevExpenses]
    });
  }
  console.log(expenses);
  return (
    <div>
      <h1 className="Heading">Expense Report React</h1>
      <NewExpense 
        TakeExpense = {ReceiveExpenseHandler}
      />
      <Expense
        expense = {expenses}
      />
    </div>
  );
}
export default App;