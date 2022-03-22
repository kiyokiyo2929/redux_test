import React from "react";
import {Link} from "react-router-dom"

const Login = () => {
    return (
        <div id="login_flex">
            <div id="login_left">

                <div id="login_top_logo">
                    <Link to="/">
                        <p>Food</p>
                        <p>delivery</p>
                    </Link>
                </div>

                <div id="login_input_wrapper">
                    <p id="login_input_title">Login</p>
                    <p id="login_input_note">Sign with your data  that you entered durign your registration.</p>
                    
                    <ul>
                        <div>
                            <label className="login_input_normal">Email
                                <input/>
                            </label>
                        </div>
                        <label className="login_input_normal" id="login_input_password">Passowrd
                            <input/>
                        </label>
                        <label id="login_input_checkbox">
                             <input type="checkbox"/><span>Keep me logged in</span>
                        </label>
                        <button>Login</button>
                    </ul>

                    <div id="login_input_forgot"><p>Forgot password</p></div>

                    <div id="login_signup_link">
                        <p>Don't have an account?</p>
                        <p>Sign up</p>
                    </div>
                </div>
            </div>
            <div id="login_right">
                <div id="login_rating_menu_wrapper">
                    <div id="login_rating_menu_flex">
                        <div id="login_rating">
                            <div id="login_top_flex">
                                <div id="login_top_left"> 
                                    <p>Overall rating</p>
                                    <div>
                                        <div>
                                            <p id="star_rating">4.2</p>
                                            <ul id="star_number_flex">
                                                <li><img src={`${process.env.PUBLIC_URL}/star.png`}/></li>
                                                <li><img src={`${process.env.PUBLIC_URL}/star.png`}/></li>
                                                <li><img src={`${process.env.PUBLIC_URL}/star.png`}/></li>
                                                <li><img src={`${process.env.PUBLIC_URL}/star.png`}/></li>
                                                <li><img src={`${process.env.PUBLIC_URL}/Vector.png`}/></li>
                                            </ul>
                                            <div id="star_number_vote"><p><span>3</span> votes</p></div>
                                        </div>
                                    </div>
                                </div>
                                <div id="login_review_info">
                                    <p>Leave review</p>
                                </div>
                            </div>
                            <hr></hr>
                            <div id="login_sort">
                                <p>Sort by:</p>
                                <select>
                                    <option>Newest first</option>
                                </select>
                            </div>
                            <div className="comment_wrapper">
                                <img src={`${process.env.PUBLIC_URL}/woman_1.png`}/>
                                <div className="review_comment_wrapper">
                                    <div className="review_name_star_wrapper">
                                        <p>Savannah Miles</p>
                                        <div className="reviewer_rate_star">
                                            <ul >
                                                <li><img src={`${process.env.PUBLIC_URL}/star.png`}/></li>
                                                <li><img src={`${process.env.PUBLIC_URL}/star.png`}/></li>
                                                <li><img src={`${process.env.PUBLIC_URL}/star.png`}/></li>
                                                <li><img src={`${process.env.PUBLIC_URL}/star.png`}/></li>
                                                <li><img src={`${process.env.PUBLIC_URL}/star.png`}/></li>
                                            </ul>
                                            <p>10 days ago</p>
                                        </div>
                                    </div>
                                    <div className="reviewer_comment">
                                      <p>Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delicata est.</p>
                                    </div>
                                    <div className="thumb_up_down">
                                        <img src={`${process.env.PUBLIC_URL}/thumb_up.png`}/>
                                        <p>14</p>
                                        <img src={`${process.env.PUBLIC_URL}/thumb_down.png`}/>
                                        <p>4</p>
                                    </div>
                                </div>
                            </div>
                            <hr className="comment_between"></hr>
                            <div className="comment_wrapper2">
                                <img src={`${process.env.PUBLIC_URL}/man.png`}/>
                                <div className="review_comment_wrapper">
                                    <div className="review_name_star_wrapper">
                                        <p>Jacob Jones</p>
                                        <div className="reviewer_rate_star">
                                            <ul >
                                                <li><img src={`${process.env.PUBLIC_URL}/star.png`}/></li>
                                                <li><img src={`${process.env.PUBLIC_URL}/star.png`}/></li>
                                                <li><img src={`${process.env.PUBLIC_URL}/star.png`}/></li>
                                                <li><img src={`${process.env.PUBLIC_URL}/star.png`}/></li>
                                                <li><img src={`${process.env.PUBLIC_URL}/Vector.png`}/></li>
                                            </ul>
                                            <p>1 days ago</p>
                                        </div>
                                    </div>
                                    <div className="reviewer_comment">
                                      <p>Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delicata est.</p>
                                    </div>
                                    <div className="thumb_up_down">
                                        <img src={`${process.env.PUBLIC_URL}/thumb_up.png`}/>
                                        <p>14</p>
                                        <img src={`${process.env.PUBLIC_URL}/thumb_down.png`}/>
                                        <p>4</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="login_menu_sample1">
                            <div><img src={`${process.env.PUBLIC_URL}/menu_1.png`}/></div>
                            <div>
                                <p>Roll set</p>
                            </div>
                            <div>
                                <p>Ea his sensibus eleifend, mollis iudicabit omittantur id mel. Et cum ignota euismod corpora, et saepe.</p>
                                </div>
                            <div>
                                <p>$ 22.56</p>
                                <div>+</div>
                            </div>
                           
                        </div>
                    </div>
                         <div id="login_menu_sample2">
                         <div><img src={`${process.env.PUBLIC_URL}/menu_2.png`}/></div>
                         <div className ="login_menu_info_wrapper">
                            <p>Nigiri set</p>
                            <p>Ea his sensibus eleifend, mollis iudicabit omittantur id mel. Et cum ignota euismod corpora, et saepe.</p>
                            <p>$ 16.80</p>
                         </div>
                         <div className="menu_btn_wrapper">
                             <div id="menu_num_dispaly">
                                 <div>-</div>
                                 <div>1</div>
                                 <div>+</div>
                             </div>
                             <div id="menu_add_cart">
                                <p> + Add to cart</p>
                             </div>
                         </div>
                    </div>
                </div>
               
               <div id="login_leave_review">
                    <p>Leave reviews for all meals</p>
                    <p>Lorem ipsum dolor sit amet, magna scaevola his ei. Cum te paulo probatus molestiae, eirmod assentior eum ne, et omnis antiopam mel.</p>
               </div>

               <ul id="lgoin_slide_btn_wrapper">
                   <li><div></div></li>
                   <li><div></div></li>
                   <li><div></div></li>
                   <li><div></div></li>
               </ul>
            </div>
        </div>
    )
}

export default Login;