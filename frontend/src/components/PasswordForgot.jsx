import React from 'react';
import style from './card.module.css';
import { MdOutlineAlternateEmail } from "react-icons/md";
import passwordImg from '../assets/password.png';
import { Link } from 'react-router-dom';
const PasswordForgot = () => {
  return (
    <div className={style.container}>
        <div className={style.card}>
            <div className={style.left_card}>
                <img className={style.left_card_img} src={passwordImg} />
            </div>
            <div className={style.right_card}>
                  <h1 className={style.right_card_title}>Forgot Password</h1>
                  <p className={style.right_card_desc}>Enter the email address associted with your account and we'll send you a link to reset your password.</p>
                <form className={style.form}>
                    <div className={style.form_input_group}>
                        <span className={style.form_input_group_icon}><MdOutlineAlternateEmail /></span>
                        <input className={style.form_input_group_input} type="text" placeholder='Email...'/>
                    </div>
                    <button className={style.form_btn}>Send</button>
                </form>
                <p className={style.desc}><Link to="/sign_in" className={style.nav_link}>Back to Login</Link></p>
            </div>
        </div>
    </div>
  )
}

export default PasswordForgot