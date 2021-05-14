import React from 'react';
import "./Navbar.css";
import SearchInput from "./SearchInput";
import DropdownFilter from "./DropdownFilter";

function Navbar(props) {

    const getSearchIp = (searchStr) => {
        props.getSearchIp(searchStr);
    }
    const getDrpDwnFilter = (filter) => {
        props.getDrpDwnFilter(filter);
    }

    return <div className="main">
        <DropdownFilter getDrpDwnFilter={getDrpDwnFilter} />
        <SearchInput getSearchIp={getSearchIp} />
    </div>
}

export default Navbar;