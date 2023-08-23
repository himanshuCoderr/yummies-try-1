import React from 'react'
import DessertsCont from '../Components/SubComponentContainer/DessertsCont'
import Navbar from '../Components/Navbar'
import SearchBar from '../Components/SearchBar'
function DessertsPage() {
  return (
    <div>
       <Navbar />
      <SearchBar />
      <DessertsCont />
    </div>
  )
}

export default DessertsPage
