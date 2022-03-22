import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { menuShow,  menuClose} from "../actions"


const Header = () => {
    const dispatch = useDispatch();
    const menu_display = useSelector(state => state.menuReducer.open)

    const click_menu_show = () => {
        dispatch(menuShow())
    }

    const click_menu_close = () => {
        dispatch(menuClose())
    }

    useEffect(()=> {
        dispatch(menuClose())
    },[])

    return (
        <div>
            <div id="header_wrapper">
                <div id="header_left">
                    <div id="login_top_logo">
                        <Link to="/login">
                            <p>Food</p>
                            <p>delivery</p>
                        </Link>
                    </div>
                    <input/>
                </div>
                <div id="header_right">
                    <ul >
                        <li><Link to="/"><p>Restaurants</p></Link></li>
                        <li><p>Deals</p></li>
                        <li><p>My orders</p></li>
                    </ul>
                    <div id="header_account_bag"><div><p>4</p></div><img src={`${process.env.PUBLIC_URL}/shopping_bag.png`}/></div>
                    <div id="header_account_img"><Link to="/account"><img src={`${process.env.PUBLIC_URL}/profile.png`}></img></Link></div>
                    <div id="header_account_line"></div>
                    <div id="hamburger_menu">
                        {menu_display? 
                        <div><img onClick={click_menu_close} src={`${process.env.PUBLIC_URL}/hamburger_menu.png`}/></div>
                        :
                        <div><img onClick={click_menu_show} src={`${process.env.PUBLIC_URL}/hamburger_menu.png`}/></div>
                        }
                    </div>
                </div>
            </div>
            {menu_display?
            <ul id="hamburger_menu_flex">
                <li><Link to="/"><p>Restaurants</p></Link></li>
                <li><p>Deals</p></li>
                <li><p>My orders</p></li>
            </ul>
            :
            <></>
            }
        </div>
    )
}

export default Header;