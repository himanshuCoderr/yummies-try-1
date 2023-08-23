import React from 'react'
import NonVegCont from '../Components/SubComponentContainer/NonVegCont'
import Navbar from "../Components/Navbar";
import SearchBar from "../Components/SearchBar";
function NonVegPage() {
  return (
    <div>
       <Navbar />
      <SearchBar />
      <NonVegCont />
    </div>
  )
}

export default NonVegPage
