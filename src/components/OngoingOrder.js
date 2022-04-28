import { Link } from "react-router-dom";
import React from 'react' 
import '../style/OngoingOrder.css'

const OngoingOrder = () => {
  return (
    <div className='container' id='containerOn'>
      <div className='row' id='ongoindRow'>
        <div className='TitleOngoing'>Bieżące zamówienie</div>

        <div className='datas'> ТУТ МАЮТЬ ДОДАВАТИСЬ ПРОДУКТИ ЗІ СПИСКУ</div>
        <div>PRODUCT 1 ...</div>
        <div>PRODUCT 2 ...</div>
        <div>PRODUCT 3 ...</div>

        <div className='row' id='OngoingLinks'>
          <Link exact to="/edit" className='col-6' id='edit'>EDIT</Link>
          <Link exact to="/confirm" className='col-6' id='confirm' >CONFIRM</Link>
        </div>
      </div>
    </div>
  )
}

export default OngoingOrder