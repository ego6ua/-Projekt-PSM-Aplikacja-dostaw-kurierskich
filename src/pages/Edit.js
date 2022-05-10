import { Link } from "react-router-dom";
import React from 'react'
import '../style/Edit.css'
import Navbar from '../components/Navbar'; 

const Edit = ({ order, removeOrder }) => {
  const allOrder = Object.entries(order)
  const AllProducts = allOrder.map((item) => {
    return <div className="row">
      <div className="col-5" id="itemPro">{item[0]}</div> 
      <div className="col-1" id="itemPro">{item[1][0]}</div>  
      <div className="col-3" id="itemPro">{(item[1][1]).toFixed(2)} zł</div>
      <div className="col-3" id="itemPro"><button id="usunProduct" onClick={() => { removeOrder(item[0], item[1][1]) }}>usuń</button></div>
    </div>
  })
  const Suma = allOrder.reduce(
    (previousValue, currentValue) => previousValue + +currentValue[1][1].toFixed(2),
    0);
  return (
      <div>
    <div className='container' id='containerEdit'>
      <div className='row' id='editRow'>
        <div className='TitleEdit'>EDYTUJ ZAMOWIENIE</div>

        <div className='datasEdit'>
          <div>{AllProducts}</div>
          
          <div className="sumaEdit">
            Suma zamówienia: {Suma} zł  
          </div> 
        </div>
        
      </div>
        <div className='row' id='EditLinks'>
            <Link exact to="/confirm" className='col-12' id='confirmEdit' >CONFIRM</Link>
            <Link exact to="/Home" className='col-12' id='cancelEdit' >Cancel order</Link>
        </div>
        
    </div>
    <Navbar/>
    </div>
  )
}

export default Edit