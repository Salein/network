import React from "react"
import s from './Header.module.css'
import { NavLink } from "react-router-dom"


const Header = (props) => {

    return (
        <header className={s.header}>
            <img src="https://i.pinimg.com/474x/9c/08/04/9c0804aec4a2c8ec751a630fa1c56bba.jpg" alt="" />

            <div className={s.loginBlock}>
                {props.isAuth ? props.login
                 : <NavLink to={'/login'} >login</NavLink>}
            </div>
        </header>
    )
}

export default Header