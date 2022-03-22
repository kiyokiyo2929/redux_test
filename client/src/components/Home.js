import React,{useEffect}  from "react";
import {Link, useLocation} from "react-router-dom";
import Header from "./Header";
import { useSelector, useDispatch } from "react-redux";
import {changePizza, falsePizza, changeBurger, falseBurger, changeBbq, falseBbq , changeSushi, falseSushi, changeVegan, falseVegan, changeDeserts, falseDeserts} from "../actions"


const Home = () => {
    const dispatch = useDispatch();
    const pizza = useSelector(state => state.categoryReducer.Pizza);
    const burger = useSelector(state => state.categoryReducer.Burger);
    const bbq = useSelector(state => state.categoryReducer.BBQ);
    const sushi= useSelector(state => state.categoryReducer.Sushi);
    const vegan= useSelector(state => state.categoryReducer.Vegan);
    const deserts= useSelector(state => state.categoryReducer.Deserts);

    let urlData = useLocation();
    let url = urlData.pathname;
    let tag = url.split('/')[1];

    useEffect(()=>{
        pizza_click_false()
        burger_click_false()
        bbq_click_false()
        sushi_click_false()
        vegan_click_false()
        deserts_click_false()
       },[tag])

    const pizza_click_true = () => {
        dispatch(changePizza())
    }

    const pizza_click_false = () => {
        dispatch(falsePizza())
    }

    const burger_click_true = () => {
        dispatch(changeBurger())
    }

    const burger_click_false = () => {
        dispatch(falseBurger())
    }

    const bbq_click_true = () => {
        dispatch(changeBbq())
    }

    const bbq_click_false = () => {
        dispatch(falseBbq())
    }

    const sushi_click_true = () => {
        dispatch(changeSushi())
    }

    const sushi_click_false = () => {
        dispatch(falseSushi())
    }

    const vegan_click_false = () => {
        dispatch(falseVegan())
    }

    const vegan_click_true = () => {
        dispatch(changeVegan())
    }

    const deserts_click_false = () => {
        dispatch(falseDeserts())
    }

    const deserts_click_true = () => {
        dispatch(changeDeserts())
    }

 

    return(
        <div>
            <Header/>   
            <div id="home_ad_wrapper">
                <div id="home_ad_left">
                    <div className="home_ad_img"><img src={`${process.env.PUBLIC_URL}/ice.png`}/></div>
                    <div className="home_ad_informaion">
                        <div>
                            <p>All deserts</p>
                            <p className="home_ad_reduse_left">20% OFF</p>
                        </div>
                        <p>Deserty</p>
                    </div>
                </div>
                <div id="home_ad_right">
                    <div className="home_ad_img"><img src={`${process.env.PUBLIC_URL}/bugger.png`}/></div>
                    <div className="home_ad_informaion">
                        <div>
                            <p>Big Burgers</p>
                            <p className="home_ad_reduse_right">50% OFF</p>
                        </div>
                        <p>Fooddies</p>
                    </div>
                </div>
            </div>
            <div>
                <ul id="home_category_wrapper">
                    {pizza?
                    <li className="home_category_item_wrapper home_category_selected" onClick={pizza_click_false}>
                    <img src={`${process.env.PUBLIC_URL}/pizza.png`}/>
                        <p>Pizza</p>
                    </li>
                    :
                    <li className="home_category_item_wrapper" onClick={pizza_click_true}>
                    <img src={`${process.env.PUBLIC_URL}/pizza.png`}/>
                        <p>Pizza</p>
                    </li>
                    }

                    {burger?
                    <li className="home_category_item_wrapper home_category_selected" onClick={burger_click_false}>
                        <img src={`${process.env.PUBLIC_URL}/bugger_cate.png`}/>
                        <p>Burger</p>
                    </li>
                    :
                    <li className="home_category_item_wrapper" onClick={burger_click_true}>
                        <img src={`${process.env.PUBLIC_URL}/bugger_cate.png`}/>
                        <p>Burger</p>
                    </li>
                    }

                    {bbq?
                    <li className="home_category_item_wrapper home_category_selected" onClick={bbq_click_false}>
                        <img src={`${process.env.PUBLIC_URL}/meat.png`}/>
                        <p>BBQ</p>
                    </li>
                    :
                    <li className="home_category_item_wrapper" onClick={bbq_click_true}>
                        <img src={`${process.env.PUBLIC_URL}/meat.png`}/>
                        <p>BBQ</p>
                    </li>
                    }

                    {sushi?
                    <li className="home_category_item_wrapper home_category_selected" onClick={sushi_click_false}>
                        <img src={`${process.env.PUBLIC_URL}/sushi.png`}/>
                        <p>Sushi</p>
                    </li>
                    :
                    <li className="home_category_item_wrapper" onClick={sushi_click_true}>
                        <img src={`${process.env.PUBLIC_URL}/sushi.png`}/>
                        <p>Sushi</p>
                    </li>   
                    }

                    {vegan?
                    <li className="home_category_item_wrapper home_category_selected" onClick={vegan_click_false}>
                        <img src={`${process.env.PUBLIC_URL}/broccoli.png`}/>
                        <p>Vegan</p>
                    </li>
                    :
                    <li className="home_category_item_wrapper"onClick={vegan_click_true}>
                        <img src={`${process.env.PUBLIC_URL}/broccoli.png`}/>
                        <p>Vegan</p>
                    </li>
                    }

                    {deserts?
                    <li className="home_category_item_wrapper home_category_selected" onClick={deserts_click_false}>
                        <img src={`${process.env.PUBLIC_URL}/cake.png`}/>
                        <p>Desserts</p>
                    </li>
                    :
                    <li className="home_category_item_wrapper" onClick={deserts_click_true}>
                        <img src={`${process.env.PUBLIC_URL}/cake.png`}/>
                        <p>Desserts</p>
                    </li>
                    }

                </ul>
            </div>
            <div id="home_restaurants_wrapper">
                <h2>Nearby restaurants</h2>
                <ul id="home_restaurants_list">
                    <li>
                        <div className="home_restaurant_item_top">
                            <img src={`${process.env.PUBLIC_URL}/example1.png`}/>   
                            <div className="home_item_featured"><p>FEATURED</p></div>
                        </div>
                        <div className="home_restaurant_item_bottom">
                            <div className="reastaurant_name_time_wrapper">
                                 <div className="reastaurant_name_time"> 
                                     <h3>Royal Sushi House</h3>
                                     <div className="reastaurant_time_wrapper">
                                         <img src={`${process.env.PUBLIC_URL}/clock.png`}/><p>30-40 min<span> • $32 min sum</span></p>
                                     </div>
                                 </div>
                                 {/* <div className="restaurant_bag_wrapper">
                                    <div><p>3</p></div>
                                    <img src={`${process.env.PUBLIC_URL}/shopping_bag_selected.png`}/>
                                 </div> */}
                                 <div className="restaurant_empty_bag_wrapper">
                                    <img src={`${process.env.PUBLIC_URL}/empty_bag.png`}/>
                                 </div>
                            </div>
                            <ul className="home_restaurant_item_category">
                                <li className="home_item_category_mark"><img src={`${process.env.PUBLIC_URL}/sushi.png`}/><p>Sushi</p></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className="home_restaurant_item_top">
                            <img src={`${process.env.PUBLIC_URL}/example2.png`}/>
                            <div className="home_item_featured"><p>FEATURED</p></div>
                        </div>
                        <div className="home_restaurant_item_bottom">
                            <div className="reastaurant_name_time_wrapper">
                                 <div className="reastaurant_name_time"> 
                                     <h3>Burgers & Pizza</h3>
                                     <div className="reastaurant_time_wrapper">
                                         <img src={`${process.env.PUBLIC_URL}/clock.png`}/><p>40-60 min<span> • $24 min sum</span></p>
                                     </div>
                                 </div>
                                 <div className="restaurant_bag_wrapper">
                                     <div><p>2</p></div>
                                    <img src={`${process.env.PUBLIC_URL}/shopping_bag_selected.png`}/>
                                 </div>
                            </div>
                            <ul className="home_restaurant_item_category">
                                <li className="home_item_category_mark"><img src={`${process.env.PUBLIC_URL}/bugger.png`}/><p>Bugger</p></li>
                                <li className="home_item_category_mark"><img src={`${process.env.PUBLIC_URL}/pizza.png`}/><p>Pizza</p></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className="home_restaurant_item_top">
                            <img src={`${process.env.PUBLIC_URL}/example3.png`}/>
                            {/* <div className="home_item_featured"><p>FEATURED</p></div> */}
                        </div>
                        <div className="home_restaurant_item_bottom">
                            <div className="reastaurant_name_time_wrapper">
                                 <div className="reastaurant_name_time"> 
                                     <h3>Ninja sushi</h3>
                                     <div className="reastaurant_time_wrapper">
                                         <img src={`${process.env.PUBLIC_URL}/clock.png`}/><p>20-40 min<span> • $40 min sum</span></p>
                                     </div>
                                 </div>
                                 {/* <div className="restaurant_bag_wrapper">
                                     <div><p>3</p></div>
                                    <img src={`${process.env.PUBLIC_URL}/shopping_bag_selected.png`}/>
                                 </div> */}
                                 <div className="restaurant_empty_bag_wrapper">
                                    <img src={`${process.env.PUBLIC_URL}/empty_bag.png`}/>
                                 </div>
                            </div>
                            <ul className="home_restaurant_item_category">
                                <li className="home_item_category_mark"><img src={`${process.env.PUBLIC_URL}/sushi.png`}/><p>Sushi</p></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className="home_restaurant_item_top">
                            <img src={`${process.env.PUBLIC_URL}/example4.png`}/>
                            {/* <div className="home_item_featured"><p>FEATURED</p></div> */}
                        </div>
                        <div className="home_restaurant_item_bottom">
                            <div className="reastaurant_name_time_wrapper">
                                 <div className="reastaurant_name_time"> 
                                     <h3>Royal Sushi House</h3>
                                     <div className="reastaurant_time_wrapper">
                                         <img src={`${process.env.PUBLIC_URL}/clock.png`}/><p>30-40 min<span> • $32 min sum</span></p>
                                     </div>
                                 </div>
                                 {/* <div className="restaurant_bag_wrapper">
                                     <div><p>3</p></div>
                                    <img src={`${process.env.PUBLIC_URL}/shopping_bag_selected.png`}/>
                                 </div> */}
                                 <div className="restaurant_empty_bag_wrapper">
                                    <img src={`${process.env.PUBLIC_URL}/empty_bag.png`}/>
                                 </div>
                            </div>
                            <ul className="home_restaurant_item_category">
                                <li className="home_item_category_mark"><img src={`${process.env.PUBLIC_URL}/sushi.png`}/><p>Sushi</p></li>
                                {/* <li></li> */}
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className="home_restaurant_item_top">
                            <img src={`${process.env.PUBLIC_URL}/example5.png`}/>
                            {/* <div className="home_item_featured"><p>FEATURED</p></div> */}
                        </div>
                        <div className="home_restaurant_item_bottom">
                            <div className="reastaurant_name_time_wrapper">
                                 <div className="reastaurant_name_time"> 
                                     <h3>Royal Sushi House</h3>
                                     <div className="reastaurant_time_wrapper">
                                         <img src={`${process.env.PUBLIC_URL}/clock.png`}/><p>30-40 min<span> • $32 min sum</span></p>
                                     </div>
                                 </div>
                                 {/* <div className="restaurant_bag_wrapper">
                                     <div><p>3</p></div>
                                    <img src={`${process.env.PUBLIC_URL}/shopping_bag_selected.png`}/>
                                 </div> */}
                                 <div className="restaurant_empty_bag_wrapper">
                                    <img src={`${process.env.PUBLIC_URL}/empty_bag.png`}/>
                                 </div>
                            </div>
                            <ul className="home_restaurant_item_category">
                                <li className="home_item_category_mark"><img src={`${process.env.PUBLIC_URL}/sushi.png`}/><p>Sushi</p></li>
                                {/* <li></li> */}
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className="home_restaurant_item_top">
                            <img src={`${process.env.PUBLIC_URL}/example6.png`}/>
                            {/* <div className="home_item_featured"><p>FEATURED</p></div> */}
                        </div>
                        <div className="home_restaurant_item_bottom">
                            <div className="reastaurant_name_time_wrapper">
                                 <div className="reastaurant_name_time"> 
                                     <h3>Royal Sushi House</h3>
                                     <div className="reastaurant_time_wrapper">
                                         <img src={`${process.env.PUBLIC_URL}/clock.png`}/><p>30-40 min<span> • $32 min sum</span></p>
                                     </div>
                                 </div>
                                 {/* <div className="restaurant_bag_wrapper">
                                     <div><p>3</p></div>
                                    <img src={`${process.env.PUBLIC_URL}/shopping_bag_selected.png`}/>
                                 </div> */}
                                 <div className="restaurant_empty_bag_wrapper">
                                    <img src={`${process.env.PUBLIC_URL}/empty_bag.png`}/>
                                 </div>
                            </div>
                            <ul className="home_restaurant_item_category">
                                <li className="home_item_category_mark"><img src={`${process.env.PUBLIC_URL}/sushi.png`}/><p>Sushi</p></li>
                                {/* <li></li> */}
                            </ul>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Home;