import React, { useEffect, useState } from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Orders from './pages/Orders';
import MyAccount from './pages/MyAccount';
import LogOut from './pages/LogOut';
import LogIn from './pages/Autorization'
import Confirm from './pages/Confirm';
import Edit from './pages/Edit';
import ShopItems from './pages/ShopItems'; 
import FinishOrder from './pages/FinishOrder';
import { ref, get, child } from 'firebase/database';
import StartFirebase from "./firebase/fdatabase";

 

const App = () => {
  
  const [state, setState] = useState('');
  const [idProduct, setIdProduct] = useState('')

  useEffect(() => {
    selectData()
  }, [])
  const selectData = () => {
    const dbref = ref(StartFirebase());
    get(child(dbref, 'Shops/')).then((snapshot) => {
      if (snapshot.exists()) {
        setState(snapshot.val()) 
      }

      else {
        alert("no data found!");
      }
    })
      .catch((error) => { alert("there is error" + error) });
  }

  const productVariable = (id) => {
    setIdProduct(id)
  }

  return (
  <Router>
    <Routes>
      <Route path="/Home" element={<Home state={state} productVariable={productVariable} />}/>
      <Route path="/order"  element={<Orders state={state} />}/>
      <Route path="/shopitems" element={<ShopItems state={state} idProduct={idProduct} />} />
      <Route path="/account" element={<MyAccount/>}/>
      <Route path="/logout" element={<LogOut/>}/>
      <Route path="/" element={<LogIn/>}/>
      <Route path="/edit" element={<Edit/>}/>
      <Route path="/confirm" element={<Confirm/>}/>
      <Route path="/finishorder" element={<FinishOrder/>}/>
    </Routes>
  </Router>
  ) 
}

export default App;
