import React from "react";
import axios from "axios";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";

const AddRestaurant = () => {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
    }
  
    return (
        <div>
          <Header/>
          <p>Under construction</p>
        </div>
    )
}

export default AddRestaurant