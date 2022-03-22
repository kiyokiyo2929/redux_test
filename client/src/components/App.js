// import logo from './logo.svg';
import React from "react";
import AddRestaurant from './AddRestaurant';
import RestaurantList from './RestaurantList';
import Home from "./Home";
import Login from "./Login";
import Account from "./Account";
import {BrowserRouter, Routes, Route} from "react-router-dom";
// import '../App.css';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/account" element={<Account/>}/>
            <Route path="/list" element={<RestaurantList/>} /> 
            <Route path="/add" element={<AddRestaurant/>}/> 
            <Route path="/" element={<Home/>}/>
          </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
