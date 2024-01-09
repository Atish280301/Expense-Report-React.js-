import React from 'react';
import ExpenseItem from './ExpenseItem';
import "../ComponentCss/Expense.css"
const Expense = (props) =>{
    return(
        <div className = "List-Box">
            {props.expense.map((expenseData, index) => (
                <ExpenseItem 
                    key = {index} 
                    ExpenseData = {expenseData} 
                />
            ))}
        </div>
    );
}
export default Expense;