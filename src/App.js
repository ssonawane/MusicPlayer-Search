import React from "react";
import Navbar from "./components/Navbar";
import SearchInput from "./components/SearchInput";
import DropdownFilter from "./components/DropdownFilter";
import SearchBody from "./components/SearchBody";

function App() {
  return (
    <React.Fragment>
      <Navbar>
        <DropdownFilter />
        <SearchInput />
      </Navbar>
      <SearchBody />
    </React.Fragment>
  );
}

export default App;
