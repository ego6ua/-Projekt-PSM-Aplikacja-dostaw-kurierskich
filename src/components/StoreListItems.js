import React from 'react'
import '../style/StoreList.css'; 
import { Link } from 'react-router-dom';

const StoreListItems = ({ state, productVariable }) => {
  const array = Object.values(state)



  const storeList = array.map((item, num) => {
    return (
      <Link to="/shopitems" onClick={() => productVariable(num)}>
        <img className='col-6' id='myItem' alt='shop' src={item.img}></img >
      </Link>
    )
  })
  return (
    <div className='container' id='mainDiv'>
      <div id='imgInDiv'>
        {storeList}
      </div>
    </div>
  )
}

export default StoreListItems