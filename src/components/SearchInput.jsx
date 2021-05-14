import React, { useState, useEffect } from 'react';

function SearchInput({ getSearchIp }) {
    const [searchIp, setSearchIp] = useState('');

    const clickHandler = (e) => {
        setSearchIp(e.target.value);
    }

    useEffect(() => {
        getSearchIp(searchIp);
    }, [searchIp])

    return <div className="search">
        <form>
            <input type="text" placeholder="Search" value={searchIp} onChange={clickHandler} name="search" />
        </form>
    </div>
}

export default SearchInput;