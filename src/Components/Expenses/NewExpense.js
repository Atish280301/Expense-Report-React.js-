import React from 'react';
import '../ComponentCss/NewExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) =>{
    return(
        <div className="FormBox">
                <ExpenseForm />
        </div>
    );
}
export default NewExpense;