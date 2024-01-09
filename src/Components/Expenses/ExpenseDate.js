import React from 'react';
import "../ComponentCss/ExpenseDate.css";
const ExpenseDate = (props) => {
    let month = props.date.toLocaleString('en-US',{month: 'long'});
    let day = props.date.toLocaleString('en-US', {day: '2-digit'});
    let year = props.date.getFullYear();
    return(
        <div className="Date">
            <div className='month'>{month}</div>
            <div className='day'>{day}</div>
            <div className='year'>{year}</div>
        </div>
    );
}
export default ExpenseDate;