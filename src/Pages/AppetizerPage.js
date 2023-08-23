import React from "react";
import Navbar from "../Components/Navbar";
import SearchBar from "../Components/SearchBar";
import AppetizerCont from "../Components/SubComponentContainer/AppetizerCont";

function AppetizerPage() {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <AppetizerCont />
    </div>
  );
}

export default AppetizerPage;
