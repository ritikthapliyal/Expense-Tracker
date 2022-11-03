import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'

function ExpenseItem(data){

    return (
        <div className="expense-item">
            <ExpenseDate date={data.date}></ExpenseDate>
            <div className="expense-item__description">
                <h3>{data.title}</h3>
                <h2>${data.amount}</h2>
            </div>
        </div>
    )

}

export default ExpenseItem