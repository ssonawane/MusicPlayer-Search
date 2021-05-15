import React from 'react';
import style from './Checkbox.module.css';

function Checkbox({ changeHandler, text, value, flag }) {

    return <div className={style.checkboxContainer}>
        <label className={style.container}>{text}
            <input type="checkbox" onChange={changeHandler} value={value} checked={flag} />
            <span className={style.checkmark}></span>
        </label>
    </div>





}

export default Checkbox;