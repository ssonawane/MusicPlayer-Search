import React from 'react';

function Checkbox({ changeHandler, text, value, flag }) {

    return <React.Fragment>
        <div className="dropdown-option">
            <input type="checkbox" name="dropdown-group" onChange={changeHandler} value={value} checked={flag} />
            {text}
        </div>
    </React.Fragment>

}

export default Checkbox;