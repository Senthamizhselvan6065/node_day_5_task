import React from 'react';
import { TbPasswordUser } from "react-icons/tb";
import style from './card.module.css';
import resetImg from '../assets/reset.png';

const PasswordReset = () => {
  return (
    <div className={style.container}>
        <div className={style.card}>
            <div className={style.left_card}>
                <img className={style.left_card_img} src={resetImg} />
            </div>
            <div className={style.right_card}>
                <h1 className={style.right_card_title}>Reset Password</h1>
                <p className={style.right_card_desc}>Enter your new password.</p>
                <form className={style.form}>
                    <div className={style.form_input_group}>
                        <span className={style.form_input_group_icon}><TbPasswordUser /></span>
                        <input className={style.form_input_group_input} type="text" placeholder='New Password...'/>
                    </div>
                    <div className={style.form_input_group}>
                        <span className={style.form_input_group_icon}><TbPasswordUser /></span>
                        <input className={style.form_input_group_input} type="text" placeholder='Confirm Password...'/>
                    </div>
                    <button className={style.form_btn}>Update</button>
                </form>
                <p className={style.desc}><span className={style.nav_link}>Back to Login!</span></p>
            </div>
        </div>
    </div>
  )
}

export default PasswordReset