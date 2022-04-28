import React from 'react'
import Navbar from '../components/Navbar'
import '../style/ShopItems.css'
import { Link } from "react-router-dom";
 
const ShopItems = ({ state, idProduct }) => {
    const array = Object.values(state)[idProduct].Products 
    const newArray = Object.values(array)
    const getProductToBasket = (name, price) => {

        if (localStorage.getItem(name)) {
            let newPrice = +localStorage.getItem(name) + +price
            localStorage.setItem(name, newPrice)
        } 
        else { 
            localStorage.setItem(name, price)
            localStorage.setItem(name + '1', name)
        }
    }

    const productAll = newArray.map(item => {
        return (
            <div className='row' id='DivForItem'>
                <img className='col-4' id='imagep' src={item.pimg} alt={item.name}></img>
                <div className='col-8'>
                    <div className='ProductName'>{item.name}</div>
                    <div className='ProductOpis'>{item.opis}</div>
                    <div className='ProductPrice'><p id='Cenap'>Cena za 1szt: </p> {item.price} zł</div>
                    <div className='ProductButton'>
                        <button id='addButton' onClick={() => getProductToBasket(item.name, item.price)}>
                            Add
                        </button>
                    </div>
                </div>
            </div>
        )
    })

  return (
      <div>
          <div className='shopTitle'>
              <Link exact to="/Home" id='shopback'>BACK</Link>
              <div id='shoptitle'>Dostępne towary w sklepie</div>
            </div>
          <div className='container'>
              <div className='row'>
                    <div id='ShopItems'>
                        {productAll}
                    </div>
              </div>
          </div>
          <Navbar/>
      </div>
  )
}

export default ShopItems