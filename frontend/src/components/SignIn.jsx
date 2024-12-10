import React from 'react';
import { MdOutlineAlternateEmail } from "react-icons/md";
import { TbPasswordUser } from "react-icons/tb";
import style from './card.module.css';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className={style.container}>
        <div className={style.card}>
            <div className={style.left_card}>
                <h1 className={style.left_card_title}>Welcome Back...</h1>
                <p className={style.left_card_desc}>Welcome back! please enter your details.</p>
            </div>
            <div className={style.right_card}>
                <h1 className={style.right_card_title}>Sign In</h1>
                <form className={style.form}>
                    <div className={style.form_input_group}>
                        <span className={style.form_input_group_icon}><MdOutlineAlternateEmail /></span>
                        <input className={style.form_input_group_input} type="text" placeholder='Email...'/>
                    </div>
                    <div className={style.form_input_group}>
                        <span className={style.form_input_group_icon}><TbPasswordUser /></span>
                        <input className={style.form_input_group_input} type="text" placeholder='Password...'/>
                    </div>
                    <button className={style.form_btn}>Sign In</button>
                </form>
                <p className={style.desc}><Link to="/password/forgot" className={style.nav_link}>Forgot Password!</Link></p>
                <p className={style.desc}>Don't have an account?<Link to="/sign_up" className={style.nav_link}>Sign up</Link></p>
            </div>
        </div>
    </div>
  )
}

export default SignIn