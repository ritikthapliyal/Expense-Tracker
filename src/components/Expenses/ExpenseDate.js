import './ExpenseDate.css'

function ExpenseDate(date){

    const month = date.date.toLocaleString('en-US',{ month : 'long'})
    const day = date.date.toLocaleString('en-US',{ day : '2-digit'}) 
    const year = date.date.getFullYear()

    return(
        <div className="expense-date">
            <h3>{day}/{month}</h3>
            <h2>{year}</h2>
        </div>
    )
    
}

export default ExpenseDate