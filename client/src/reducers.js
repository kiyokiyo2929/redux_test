import { combineReducers } from "redux";
import { MENU_SHOW, MENU_CLOSE, CHANGE_PIZZA, FALSE_PIZZA, CHANGE_BURGER, FALSE_BURGER, CHANGE_BBQ, FALSE_BBQ, CHANGE_SUSHI, FALSE_SUSHI, CHANGE_VEGAN, FALSE_VEGAN, CHANGE_DESERTS, FALSE_DESERTS, REQUEST_DATA, RECEIVE_DATA_SUCCESS, RECEIVE_DATA_FAILED } from "./actions"

const initialState = {
        menu: {
            open:false
        },
        category: {
            Pizza:false,
            Burger:false,
            BBQ:false,
            Sushi:false,
            Vegan:false,
            Deserts:false
        },
        restaurants :{
            isFetching:false,
            restaurantArray:[]
        },
        input:{
            inputName:"",
        },
    }

 
    const categoryReducer = (state = initialState.category, action) => {
        switch(action.type){
            case CHANGE_PIZZA:
                return {
                    ...state,
                    Pizza:true
                }
            case FALSE_PIZZA:
                return {
                    ...state,
                    Pizza:false
                }
            case CHANGE_BURGER:
                return {
                    ...state,
                    Burger:true
                }
            case FALSE_BURGER:
                return {
                    ...state,
                    Burger:false
                }
            case CHANGE_BBQ:
                return {
                    ...state,
                    BBQ:true
                }
            case FALSE_BBQ:
                return {
                    ...state,
                    BBQ:false
                }
            case CHANGE_SUSHI:
                return {
                    ...state,
                    Sushi:true
                }
            case FALSE_SUSHI:
                return {
                    ...state,
                    Sushi:false
                }
            case CHANGE_VEGAN:
                return {
                    ...state,
                    Vegan:true
                }
            case FALSE_VEGAN:
                return {
                    ...state,
                    Vegan:false
                }
            case CHANGE_DESERTS:
                return {
                    ...state,
                    Deserts:true
                }
            case FALSE_DESERTS:
                return {
                    ...state,
                    Deserts:false
                }
            
            default:
                return state
        }
    }
    const menuReducer = (state = initialState.menu, action) => {
        switch(action.type){
            case MENU_SHOW:
                return {
                    open:true
                }
            case MENU_CLOSE:
                return {
                    open:false
                }
            default:
                return state
        }
    }

    const restaurantsReducers = (state = initialState.restaurants, action) => {
        switch (action.type){
            case REQUEST_DATA:
                return {
                    ...state,
                    isFetching:true
                }
            case RECEIVE_DATA_SUCCESS:
                return {
                    ...state,
                    isFetching:false,
                    restaurantArray:action.restaurantArray
                }
            case RECEIVE_DATA_FAILED:
                return {
                    ...state,
                    isFetching:false
                }
            default:
                return state
        }
    }
    
    const rootReducer = combineReducers({
        categoryReducer,
        restaurantsReducers,
        menuReducer
    })

    export default rootReducer
