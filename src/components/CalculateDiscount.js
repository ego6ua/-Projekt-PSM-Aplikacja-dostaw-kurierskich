import React from 'react'
import '../style/CalculateDiscount.css'
 
const CalculateDiscount = () => {
  return (
    <div className='container' id='CalculateDiv'>
          <div className='row' id='row_discountdiv'>
            <h4 className='col-9'>Zamówień do obniżki 10%</h4>
            <h4 className='col-3' id='obnizka'>1/10</h4>
          </div>
    </div>
  )
}

export default CalculateDiscount