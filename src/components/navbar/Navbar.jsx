import React from 'react';
import style from "./Navbar.module.css";
import SearchInput from "../searchinput/SearchInput";
import DropdownFilter from "../dropdown/DropdownFilter";

function Navbar(props) {

    const getSearchIp = (searchStr) => {
        props.getSearchIp(searchStr);
    }
    const getDrpDwnFilter = (filter) => {
        props.getDrpDwnFilter(filter);
    }

    return <div className={style.main}>
        <DropdownFilter getDrpDwnFilter={getDrpDwnFilter} />
        <SearchInput getSearchIp={getSearchIp} />
    </div>
}

export default Navbar;