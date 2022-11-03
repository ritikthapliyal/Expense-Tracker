import "./Chart.css"
import ChartBar from "./ChartBar"

function Charts(data){


    const months = [
        {month: 'Jan',value : 0},
        {month: 'Feb',value : 0},
        {month: 'Mar',value : 0},
        {month: 'Apr',value : 0},
        {month: 'May',value : 0},
        {month: 'Jun',value : 0},
        {month: 'Jul',value : 0},
        {month: 'Aug',value : 0},
        {month: 'Sep',value : 0},
        {month: 'Oct',value : 0},
        {month: 'Nov',value : 0},
        {month: 'Dec',value : 0}
    ] 

    let max_amt = 0

    data.expenses.forEach(obj => {
        
        if(String(obj.date.getFullYear()) === data.year){
            const expenseMonth = obj.date.getMonth()
            months[expenseMonth].value += obj.amount 

            if(months[expenseMonth].value > max_amt){
                max_amt = months[expenseMonth].value
            }
        }

    })

    return(
        <div className="charts-container">
            {  
                months.map((obj) => {
                    return <ChartBar obj={obj} max_amt={max_amt}></ChartBar>
                }) 
            }
        </div>
    )

}

export default Charts