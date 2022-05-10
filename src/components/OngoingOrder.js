import { Link } from "react-router-dom";
import React from 'react'
import '../style/OngoingOrder.css'
 

const OngoingOrder = ({ order }) => {
  const allOrder = Object.entries(order)
  const AllProducts = allOrder.map((item) => {
    return <div className="row">
      <div className="col-6">{item[0]}</div> 
      <div className="col-2">{item[1][0]}</div>  
      <div className="col-3">{(item[1][1]).toFixed(2)} zł</div>
    </div>
  })
  const Suma = allOrder.reduce(
    (previousValue, currentValue) => previousValue + +currentValue[1][1].toFixed(2),
    0);

    
 
  return (
    <div className='container' id='containerOn'>
      <div className='row' id='ongoindRow'>
        <div className='TitleOngoing'>Bieżące zamówienie</div>
        <div className="ProductsOngoing">
          
          {AllProducts}
          <div className="SumaOngoingOrder">Suma: {Suma} zł</div>
        </div>
        <div className='row' id='OngoingLinks'>
          <Link exact to="/edit" className='col-6' id='edit'>EDIT</Link>
          <Link exact to="/confirm" className='col-6' id='confirm' >CONFIRM</Link>
        </div>
      </div>
    </div>
  )
}

export default OngoingOrder