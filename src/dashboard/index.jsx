import React from 'react'
import '../dashboard/styleDash.css'


function Dashboard(){
    return (
        <>
            <div className='hero'>
                <h1 className='writeUP'>Dashboard</h1>
                    <h1 className='hello'>Card details</h1>
                    <h1 className='amount'>Amount</h1>
                    <h1 className='date'>Date</h1>

                    <table className='table'>
                        <thead className='header'>Transacation History</thead>
                        <tr className='table-values'>
                            <th className='date-value'>Date</th>
                            <th>Subscription Type</th>
                            <th>Amount</th>
                        </tr>
                    </table>
                </div>
                <div className='sideBar'>
                    <h1 className='sideBarText'>Side-Bar</h1>
                </div>
                <div>
                    <div>
                        
                    </div>
                </div>
        
        </>
    )
}

export default Dashboard