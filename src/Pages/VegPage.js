import React from "react";
import Navbar from "../Components/Navbar";
import SearchBar from "../Components/SearchBar";
import VegCont from "../Components/SubComponentContainer/VegCont";

function  VegPage() {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <VegCont />
    </div>
  );
}

export default VegPage;