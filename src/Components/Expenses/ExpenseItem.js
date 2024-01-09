import React, { useState } from 'react';
import ExpenseDate from "./ExpenseDate";
import "../ComponentCss/ExpenseItem.css";
const ExpenseItem = (props) =>{
    //Delete Item From List
    const [IsDeleted, SetDeleted] = useState(false);
    const DeleteItem = () => {SetDeleted(true)}
    if(IsDeleted){return null;}

    return(
        <div className="Expense-Box">
            <ExpenseDate date = {props.ExpenseData.ExpDate} />
            <div className='title'>{props.ExpenseData.ExpTitle}</div>
            <div className='cost'>{props.ExpenseData.ExpCost}</div>
            <div className='count'>{props.ExpenseData.ExpCount}</div>
            <button className='btn' onClick={DeleteItem}>Delete</button>
            <button className="btn">Update</button>
        </div>
    );
}
export default ExpenseItem;