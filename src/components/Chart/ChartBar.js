import './ChartBar.css'


function ChartBar(data){

    let width = 0
    if(data.max_amt !== 0)
        width = Math.round((data.obj.value / data.max_amt) * 100)

    width = width + '%'

    return(
        <div className='container'>
            <p>{data.obj.month}</p>
            <div className='filler-container'>
                <div className='filler' style={{width : width}}></div>
                <p>${data.obj.value}</p>
            </div>
        </div>
    )

}

export default ChartBar