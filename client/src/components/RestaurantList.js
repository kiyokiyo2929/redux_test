import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { requestData, receiveDataSuccess, receiveDataFailed } from "../actions"


const RestaurantLis = () => {
    const dispatch = useDispatch();
    const {isFetching, restaurantArray} = useSelector(state => state.restaurantsReducers);

    const handleFetchData = () => {
        dispatch(requestData())
        axios.get("/api/restaurant")
        .then(response => {
            const _restaurantArray = response.data
            dispatch(receiveDataSuccess(_restaurantArray))
        })
        .catch(err => {
            console.error(new Error(err))
            dispatch(receiveDataFailed())
        })

    }

    return (
        <div>
            {isFetching?
                <h2>Now Loading</h2>
                :
                <div>
                    <button onClick={()=>handleFetchData()}>Fetch Data</button>
                    <ul>
                        {restaurantArray.map(restaurant => (
                            <li key={restaurant._id}>
                                {`${restaurant.name}`}
                            </li>
                        ))}
                    </ul>
                </div>

            }
        </div>
    )
}

export default RestaurantLis;