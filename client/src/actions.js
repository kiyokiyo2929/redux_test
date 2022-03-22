export const CHANGE_PIZZA = "CHANGE_PIZZA";
export const FALSE_PIZZA = " FALSE_PIZZA";
export const CHANGE_BURGER = "CHANGE_BURGER";
export const FALSE_BURGER = "FALSE_BURGER"
export const CHANGE_BBQ = "CHANGE_BBQ";
export const FALSE_BBQ = "FALSE_BBQ";
export const CHANGE_SUSHI = "CHANGE_SUSHI";
export const FALSE_SUSHI = "FALSE_SUSHI";
export const CHANGE_VEGAN = "CHANGE_VEGAN";
export const FALSE_VEGAN = "FALSE_VEGAN";
export const CHANGE_DESERTS = "CHANGE_DESERTS";
export const FALSE_DESERTS = "FALSE_DESERTS";
export const INITIALIZE_FORM = "INITIALIZE_FORM";
export const REQUEST_DATA = "REQUEST_DATA";
export const RECEIVE_DATA_SUCCESS = "RECEIVE_DATA_SUCCESS";
export const RECEIVE_DATA_FAILED  = "RECEIVE_DATA_FAILED";
export const MENU_SHOW = "MENU_SHOW";
export const MENU_CLOSE = "MENU_CLOSE:"

export const changePizza = () =>({
   type:CHANGE_PIZZA,
})

export const falsePizza = () => ({
    type: FALSE_PIZZA,
})

export const changeBurger = () =>({
   type:CHANGE_BURGER,
})

export const falseBurger = () =>({
   type:FALSE_BURGER,
})

export const changeBbq = () =>({
   type:CHANGE_BBQ,
})

export const falseBbq = () =>({
   type:FALSE_BBQ,
})

export const changeSushi = () =>({
   type:CHANGE_SUSHI,
})

export const falseSushi = () =>({
   type:FALSE_SUSHI,
})

export const changeVegan = () =>({
    type:CHANGE_VEGAN,
 })

export const falseVegan = () =>({
    type:FALSE_VEGAN,
 })

export const changeDeserts = () =>({
    type:CHANGE_DESERTS,
 })

export const falseDeserts = () =>({
    type:FALSE_DESERTS,
 })

export const menuShow = () => ({
   type:MENU_SHOW
})

export const menuClose = () => ({
   type:MENU_CLOSE
})

export const initializeForm = () => ({
    type: INITIALIZE_FORM,
  })

export const requestData = () => ({
    type: REQUEST_DATA,
  })

export const receiveDataSuccess = (restaurantArray) => ({
    type: RECEIVE_DATA_SUCCESS,
    restaurantArray,
  })

export const receiveDataFailed = () => ({
    type: RECEIVE_DATA_FAILED,
  })