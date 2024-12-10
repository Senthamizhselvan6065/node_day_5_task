import React from 'react';
import style from './card.module.css';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className={style.container}>
        <div className={style.card}>
            <div className={style.left_card}>
                <h1 className={style.left_card_title}>Hello, Friends!</h1>
                <p className={style.left_card_desc}>Register with your personal details to use all of site features</p>
            </div>
            <div className={style.right_card}>
                <h1 className={style.right_card_title}>Sign Up</h1>
                <form className={style.form}>
                     <input className={style.input} type="text" placeholder='Username...'/>
                     <input className={style.input} type="text" placeholder='Email...'/>
                     <input className={style.input} type="text" placeholder='Password...'/>
                     <button className={style.form_btn}>Sign up</button>
                </form>
                <p className={style.desc}>Already have an acccount? <Link to="/sign_in" className={style.nav_link}>Sign In</Link></p>
            </div>
        </div>
    </div>
  )
}

export default SignUp