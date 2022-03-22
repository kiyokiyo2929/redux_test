import React from "react";
import AddRestaurant from './AddRestaurant';
import RestaurantList from './RestaurantList';
import Home from "./Home";
import Login from "./Login";
import Account from "./Account";
import {HashRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HashRouter>
          <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/account" element={<Account/>}/>
            <Route path="/list" element={<RestaurantList/>} /> 
            <Route path="/add" element={<AddRestaurant/>}/> 
            <Route path="/" element={<Home/>}/>
          </Routes>
     </HashRouter>
    </div>
  );
}

export default App;
