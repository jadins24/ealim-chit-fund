import React from 'react'
import './chitplans.scss';

const Chitplans = () => {


  return (
    <div className='chitplans'>
      <div className='chitplans-container'>
        <div className='chitplans-head'>
          <h1>Chit Plans </h1>


        </div>
        <div className='chitplans-content'>
          <div className='table1'>
            <table>
              <tr>
                <th>Sl No</th>
                <th>Chit Amount</th>
                <th>No Of People</th>
                <th>Total Months</th>
                <th>Monthly Payment</th>
                <th>Weekly Payment</th>
                <th></th>
                
              </tr>
              <tr>
                <td>1 </td>
                <td>25,000 </td>
                <td>25</td>
                <td>25 </td>
                <td>1000 </td>
                <td>250</td>
                <td>3954</td>
              </tr>
              <tr>
                <td>2 </td>
                <td>30,000 </td>
                <td>25</td>
                <td>25 </td>
                <td>1200 </td>
                <td>300</td>
                <td>4747</td>
              </tr>
              <tr>
                <td>3 </td>
                <td>50,000 </td>
                <td>25</td>
                <td>25 </td>
                <td>2000 </td>
                <td>500</td>
                <td>7769</td>
              </tr>
              <tr>
                <td>4 </td>
                <td>75,000 </td>
                <td>25</td>
                <td>25 </td>
                <td>3000 </td>
                <td>750</td>
                <td>11869</td>
              </tr>
              <tr>
                <td>5 </td>
                <td>1,00,000 </td>
                <td>25</td>
                <td>25 </td>
                <td>4000 </td>
                <td>1000</td>
                <td>15537</td>
              </tr>
          
            </table>
          </div>
        </div>


      </div>


    </div>
  )
}

export default Chitplans