import React from 'react'
import SearchBar from "../Components/SearchBar";
import Navbar from "../Components/Navbar";
import BreakFastCont from '../Components/SubComponentContainer/BreakFastCont';
function BreakFastPage() {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <BreakFastCont />
    </div>
  )
}

export default BreakFastPage
