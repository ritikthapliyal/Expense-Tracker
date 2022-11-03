import './ExpenseForm.css'
import {useState} from 'react'


function ExpenseForm(data){


    const [title,updateTitle] = useState('')
    const [date,updateDate] = useState('')
    const [amount,updateAmount] = useState('')

    const titleHandler = function(event){
        updateTitle(event.target.value)
    }

    const dateHandler = function(event){
        updateDate(event.target.value)
    }

    const amountHandler = function(event){
        updateAmount(event.target.value)
    }

    
    const buttonHandler = function(){

        if(title.trim().length === 0 || amount < 0 || !date){
            return 
        }

        const expenseData = {
            title:title,
            date:new Date(date),
            amount:Number(amount)
        }

        data.onReceivingexpenseData(expenseData)
        
        updateAmount('')
        updateDate('')
        updateTitle('')

    }

    return(
        <div className="expense-form">
            <div>
                <label>Title : </label>
                <input className="title" type="text" value={title} onChange={titleHandler}></input>
            </div>
            <div>
                <label>Date : </label>
                <input className="date" type="date" value={date} onChange={dateHandler}></input>
            </div>
            <div>
                <label>Amount : </label>
                <input className="amount" value={amount} type="number" placeholder="$" onChange={amountHandler}></input>
            </div>    

            <button className="submit_button" onClick={buttonHandler}>Add Todo</button>
        </div>
    )


}

export default ExpenseForm