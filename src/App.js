import React, { useState } from 'react';
import NewExpense from "./Components/Expenses/NewExpense";
import './App.css';
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
    </div>
  );
}

export default App;