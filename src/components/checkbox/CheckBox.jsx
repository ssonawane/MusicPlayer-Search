import React from 'react';
import style from './Checkbox.module.css';

function Checkbox({ changeHandler, text, value, flag }) {

    return <div className={style.checkboxContainer}>
        <label data-testid={text} className={style.container}>{text}
            <input data-testid={value} type="checkbox" onChange={changeHandler} value={value} checked={flag} />
            <span className={style.checkmark}></span>
        </label>
    </div>





}

export default Checkbox;