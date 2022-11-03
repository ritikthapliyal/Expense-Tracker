import './App.css'

import {useState} from 'react'
import ExpenseItem from './components/Expenses/ExpenseItem';
import ExpenseForm from './components/NewExpenses/ExpenseForm';
import FilterExpenses from './components/Expenses/FilterExpenses';
import Charts from './components/Chart/Chart';

const dummyData = [
  { 
    id: 0,
    date: new Date(2022,5,12),
    title:"Murder",
    amount:6969
  },
  { 
    id: 1,
    date: new Date(2021,0,12),
    title:"Health Checkup",
    amount:50
  },
  { 
    id: 2,
    date: new Date(2019,6,11),
    title:"New Desk hehe hahah hoho huiihuii (Wooden)",
    amount:450
  },

]


function App(){

  const [expenses,updateexpenses] = useState(dummyData)
  const [selectedYear,setSelectedYear] = useState('default')

  const handleexpenseData = function(newexpenseData){

    const newData ={
      ...newexpenseData,
      id: expenses.length
    }

    updateexpenses( () => {
      return [newData,...expenses]
    })

  }

  const handleYearSelection = (selectedYear) => {
    setSelectedYear(selectedYear)
  }


  return (
    <div className="App">
        <ExpenseForm onReceivingexpenseData={handleexpenseData}></ExpenseForm>
        <div className='expense-items-outer-container'>
          <div className="expense-items-container">
            
            <FilterExpenses  expensedata={expenses} onYearSelection={handleYearSelection}></FilterExpenses>
            
            {
              selectedYear === 'default'
                ? 
                expenses.map( (obj) => {
                  return <ExpenseItem key={obj.key} title={obj.title} amount={obj.amount} date={obj.date}></ExpenseItem>
                }) 
                : 
                expenses.map( (obj) => {
                  if(String(obj.date.getFullYear()) === selectedYear){
                    return <ExpenseItem key={obj.key} title={obj.title} amount={obj.amount} date={obj.date}></ExpenseItem>
                  }
                })
            }
          </div>
        </div>
      <Charts year={selectedYear} expenses={expenses}></Charts>
    </div>
  )
}

export default App;
