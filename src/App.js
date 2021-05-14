import React, { useState } from "react";
import Navbar from "./components/Navbar";
import SearchBody from "./components/SearchBody";

function App() {
  const [searchStr, setSearchStr] = useState("");
  const [drpDwnFilter, setDrpDwnFilter] = useState([]);

  const getSearchIp = (srchStr) => {
    setSearchStr(srchStr);
  };

  const getDrpDwnFilter = (filter) => {
    setDrpDwnFilter(filter);
  };

  return (
    <React.Fragment>
      <Navbar getSearchIp={getSearchIp} getDrpDwnFilter={getDrpDwnFilter} />
      <SearchBody searchStr={searchStr} drpDwnFilter={drpDwnFilter} />
    </React.Fragment>
  );
}

export default App;
