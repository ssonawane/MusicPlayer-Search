import React from 'react';

function Checkbox({ changeHandler, text, value, flag }) {

    return <React.Fragment>
        <label className="dropdown-option">
            <input type="checkbox" name="dropdown-group" onChange={changeHandler} value={value} checked={flag} />
            {text}
        </label>
    </React.Fragment>

}

export default Checkbox;