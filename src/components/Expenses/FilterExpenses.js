import './FilterExpenses.css'

function FilterExpenses(data){


    const yearSet = new Set( data.expensedata.map((obj) => {
        const year = obj.date.getFullYear()
        return year
    }))
    
    const years = Array.from(yearSet)

    const clickHandler = function(event){
        data.onYearSelection(event.target.value)
    }

    return (
        <div className='filter-bar'>
            <h3>Filter By Year: </h3>
            <select onClick={clickHandler}>
                <option value="default">-------ALL-------</option>
                {
                    years.map((year) => {
                        return <option key={year} value={year}>{year}</option>
                    })
                }
            </select>
        </div>
    )
}

export default FilterExpenses