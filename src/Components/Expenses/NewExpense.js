import React, { useState} from 'react';
import '../ComponentCss/NewExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) =>{
    const [IsEditing, SetIsEditing] = useState(false);
    const StartEditing = () => {    SetIsEditing(true);     }
    const StopEditing = () => {     SetIsEditing(false);    }
    //Collect Data From ExpenseForm to NewExpense
    const SaveExpenseDataHandler = (EnteredExpenseData) =>{
        const ExpenseData = {
            ...EnteredExpenseData
        }
        console.log(ExpenseData);
        props.TakeExpense(ExpenseData);
    }
    return(
        <div className="FormBox">
                <div className="cnb">
                    {
                        !IsEditing &&
                        <button className= "APBTN BTN1" onClick={StartEditing}>Add Expense</button>
                    }
                </div>
                {
                    IsEditing &&
                    <ExpenseForm 
                        onSaveExpenseData = {SaveExpenseDataHandler}
                        onCancel = {StopEditing}
                    />
                }
        </div>
    );
}
export default NewExpense;