import React, { useState } from 'react';
import '../ComponentCss/ExpenseForm.css';
const ExpenseForm = (props) =>{
    const [EnteredTitle, SetEnteredTitle] = useState('');
    const [EnteredCost, SetEnteredCost] = useState('');
    const [EnteredCount, SetEnteredCount] = useState('');
    const [EnteredDate, SetEnteredDate] = useState('');
    const TitleData = (event) => {
        SetEnteredTitle(event.target.value);
    }
    const CostData = (event) => {
        SetEnteredCost(event.target.value);
    }
    const CountData = (event) => {
        SetEnteredCount(event.target.value);
    }
    const DateData = (event) => {
        SetEnteredDate(event.target.value);
    }
    /*Submit The Form and Collect the data*/
    const SubmitExpenseData = (event) => {
        event.preventDefault();
        const DateDataEx = EnteredDate.split('-');
        const ExpenseDataObj = {
            ExpTitle: EnteredTitle,
            ExpCost: EnteredCost,
            ExpCount: EnteredCount,
            ExpDate: new Date(DateDataEx[0], DateDataEx[1], DateDataEx[2])
        };
        console.log(ExpenseDataObj);
        SetEnteredTitle('');
        SetEnteredCost('');
        SetEnteredCount('');
        SetEnteredDate('');
    }
    return(
        <>
            <form className='form'>
            <div className='part'>
                <label className="lbl">Expense Title:</label>
                <input className='IP' type="text" value = {EnteredTitle} onChange = {TitleData}/>
            </div>
            <div className='part'>
                <label className="lbl">Expense Cost:</label>
                <input className='IP' type="text" value={EnteredCost} onChange={CostData}/>
            </div>
            <div className='part'>
                <label className="lbl">Expense Count:</label>
                <input className='IP' type="text" value={EnteredCount} onChange={CountData}/>
            </div>
            <div className='part'>
                <label className="lbl">Expense Date:</label>
                <input className='IP' type="date" value={EnteredDate} onChange={DateData}/>
            </div>
            </form>
            <div className='part1'>
                <button type="button" className="BTN two" onClick={props.onCancel}>Cancel</button>
                <button type="submit" className='BTN one' onClick={SubmitExpenseData}>Submit</button>
            </div>
        </>
    );
}
export default ExpenseForm;