import React, { useState } from 'react';

function SearchInput() {
    const [searchIp, setSearchIp] = useState('');

    const clickHandler = (e) => {
        setSearchIp(e.target.value);
    }

    return <div className="search">
        <form>
            <input type="text" placeholder="Search" value={searchIp} onChange={clickHandler} name="search" />
        </form>
    </div>
}

export default SearchInput;