import React from 'react'
import Navbar from '../components/Navbar'
import '../style/FinishOrder.css'
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid'; 


const FinishOrder = ({ order }) => {
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
    <div>
        <div className='SuccesTitle'>SUCCES</div>
        <div className='container' id='FinishContainer'>
            <div className='row'>
                <div className='col-12' id='FinishTitle'>
                    Twoje zamówienie jest gotowe !
                </div>
            </div> 
            <div className='row' id='FinishOrderView'>
                <div className='col-7' id='titlefinishorder1'>
                    Your order: #{uuidv4().slice(0,7)}
                </div>
                <div className='col-5' id='titlefinishorder2'>
                    09/05/22
                </div>
                <div className='col-12' id='FinishProductList'>
                    {AllProducts}
                </div>
                <div id='finishAmounth'>
                    Suma : {Suma} zł
                </div>
            </div>
            <div className='finishMapView'>
                <div className='row'>
                    <div className='col-12' id='finishMapTitle'>
                        Oczekuj wiadomości od kuriera po jego przybyciu
                    </div>
                </div>
                
                <div className='row' id='rowClose'>
                    <Link exact to="/Home" className='col' id='Close'>
                        <div id='h1Close'>CLOSE</div>
                    </Link> 
                </div>
            </div>
        </div>
        
        <Navbar/>
    </div>
  )
}

export default FinishOrder