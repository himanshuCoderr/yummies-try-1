import React from 'react'
import Navbar from '../Components/Navbar'
import SearchBar from '../Components/SearchBar'
import TopCategoryCont from '../Components/SubComponentContainer/TopCategoryCont'
import RecommendedCardCont from '../Components/SubComponentContainer/RecommendedCardCont'
function Home() {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <TopCategoryCont />
      <RecommendedCardCont />
    </div>
  )
}

export default Home
