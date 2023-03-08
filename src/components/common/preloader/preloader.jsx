import React from "react";
import preloader from '../../../assets/preloader.svg'
import style from './../../Users/Users.module.css'

let Preloader = () => {

    return <div className={style.preloader}>
        <img src={preloader} alt='' />
    </div>
}

export default Preloader