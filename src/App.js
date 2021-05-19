import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import SearchBody from "./components/searchbody/SearchBody";
import axios from "axios";

export const context = React.createContext();

function App() {
  const [searchStr, setSearchStr] = useState("");
  const [drpDwnFilter, setDrpDwnFilter] = useState([]);
  const [musicList, setMusicList] = useState([]);

  const getSearchIp = (srchStr) => {
    setSearchStr(srchStr);
  };

  const getDrpDwnFilter = (filter) => {
    setDrpDwnFilter(filter);
  };

  useEffect(() => {
    axios
      .get("./data.json")
      .then((resp) => {
        setMusicList(resp.data.sections[0].assets);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  return (
    <React.Fragment>
      {musicList.length > 0 && (
        <context.Provider value={musicList}>
          <Navbar getSearchIp={getSearchIp} getDrpDwnFilter={getDrpDwnFilter} />
          <SearchBody searchStr={searchStr} drpDwnFilter={drpDwnFilter} />
        </context.Provider>
      )}
    </React.Fragment>
  );
}

export default App;
