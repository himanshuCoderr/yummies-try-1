import React from "react";
import SearchBar from "../Components/SearchBar";
import Navbar from "../Components/Navbar";
import ChineeseCont from "../Components/SubComponentContainer/ChineeseCont";
function ChineesePage() {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <ChineeseCont />
    </div>
  );
}

export default ChineesePage;
