import React from "react";
import Header from "./Header";

const Account = () => {
    return(
        <div>
            <Header/>
            <div id="account_wrapper">
                <div id="account_left_setting">
                    <h2 className="account_setting_title">Settings</h2>
                    <ul>
                        <li>
                            <div className="account_each_img_selected_wrapper"><img src={`${process.env.PUBLIC_URL}/user.png`}/></div>
                            <div className="account_each_setting_wrapper">
                                <h3>Account</h3>
                                <p>Personal information</p>
                            </div>
                        </li>
                        <li>
                            <div className="account_each_img_wrapper"><img src={`${process.env.PUBLIC_URL}/map_pin.png`}/></div>
                            <div className="account_each_setting_wrapper">
                                <h3>Address</h3>
                                <p>Shippings addresses</p>
                            </div>
                        </li>
                        <li>
                            <div className="account_each_img_wrapper"><img src={`${process.env.PUBLIC_URL}/credit_card.png`}/></div>
                            <div className="account_each_setting_wrapper">
                                <h3>Payment method</h3>
                                <p>Connected credit cards</p>
                            </div>
                        </li>
                        <li>
                            <div className="account_each_img_wrapper"><img src={`${process.env.PUBLIC_URL}/shield_on.png`}/></div>
                            <div className="account_each_setting_wrapper">
                                <h3>Security</h3>
                                <p>Password, 2FA</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div id="account_right_account">
                    <h2 className="account_setting_title">Account</h2>
                    <ul id="account_information__notification_wrapper">
                        <div id="personal_information_wrapper">
                            <h3>Personal information</h3>
                            <div id="account_avatar_wrapper">
                                <p>Avatar</p>
                                <div id="avatar_img_btn_wrapper">
                                    <div><img src={`${process.env.PUBLIC_URL}/main_avatar.png`}/></div>
                                    <ul id="acount_change_remove_flex">
                                        <li><p>Change</p></li>
                                        <li><p>Remove</p></li>
                                    </ul>
                                </div>
                            </div>
                            <div id="account_information_wrapper">
                               <div>
                                   <label>First name
                                   <input value="Jane"/>
                                   </label>
                               </div>
                               <div>
                                   <label>Last name
                                   <input value="Robertson"/>
                                   </label>
                               </div>
                               <div>
                                   <label>Email
                                   <input value="jane.robertson@example.com"/>
                                   </label>
                               </div>
                               <div>
                                   <label>Phone number
                                   <input value="(217) 555-0113"/>
                                   </label>
                               </div>
                            </div>
                        </div>
                        <div id="mail_notification_wrapper">
                            <h3>Email notifications</h3>
                            <div id="mail_notification_checkbox_wrapper">
                                <label >
                                    <input type="checkbox"/><span>New deals</span>
                                </label>
                                <label>
                                    <input type="checkbox"/><span>Password changes</span>
                                </label>
                                <label>
                                    <input type="checkbox"/><span>New restaurants</span>
                                </label>
                                <label>
                                    <input type="checkbox"/><span>Special offers</span>
                                </label>
                                <label>
                                    <input type="checkbox"/><span>Order statuses</span>
                                </label>
                                <label>
                                    <input type="checkbox"/><span>Newsletter</span>
                                </label>
                            </div>
                        </div>
                        <div id="logout_mb_page"><p>Log out</p></div>
                        <hr id="line"></hr>
                        <div id="logout_edit_wrapper">
                            <div id="logout_pc_page"><p>Log out</p></div>
                            <div id="discard_save_wrapper">
                                <div><p>Discard changes</p></div>
                                <div><p>Save changes</p></div>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Account;