import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {changeRestaurantame, changePizza, changeBurgger, changeBbq, changeSushi, changeVegan, changeDeserts, initializeForm, requestData, receiveDataSuccess, receiveDataFailed } from "../actions"

const AddRestaurant = () => {
    const dispatch = useDispatch();
    const name = useSelector(state => state.formReducer.restaurantName);

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("/api/restaurant", {
            name
        })
        .then(response => {
            console.log(response)
            dispatch(initializeForm());
            const restaurantArray = response.data;
            dispatch(receiveDataSuccess(restaurantArray))

        })
        .catch(err => {
            console.error(new Error(err))
            dispatch(receiveDataFailed())
        })
    }
  
    return (
        <div>
            <p>{name}</p>
            <form onSubmit={e => handleSubmit(e)}>
                 <input value={name} onChange={e => dispatch(changeRestaurantame(e.target.value))}  type="text" />
                 <button type="Submit">Add</button>
            </form>
        </div>
    )
}

export default AddRestaurant