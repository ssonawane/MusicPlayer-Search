import React, { useState, useEffect } from 'react';
import style from './SearchInput.module.css';

function SearchInput({ getSearchIp }) {
    const [searchIp, setSearchIp] = useState('');

    const clickHandler = (e) => {
        setSearchIp(e.target.value);
    }

    useEffect(() => {
        getSearchIp(searchIp);
    }, [searchIp])

    return <div className={style.search}>
        <form>
            <input data-testid="input-search" type="text" placeholder="Search" value={searchIp} onChange={clickHandler} name="search" />
        </form>
    </div>
}

export default SearchInput;