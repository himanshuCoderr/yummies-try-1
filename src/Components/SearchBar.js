import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import data from '../data.json'
function SearchBar() {
  let [search,setSearch] = useState('')
  function getSearchItem (){
      console.log(search)
    let foundData = data.Chineese.find(item => item.name == search)
    console.log(foundData)
  }

  return (
    <div className="w-[80vw]  h-[60px] m-auto items-center flex  ">
      <div className="h-full flex items-center " >
        <SearchIcon className="bg-[#9181F41A]"  style={{height:"60px",paddingLeft:"10px", width:"40px" , borderRadius:"10px 0px 0px 10px"}} />
        <input
        style={{ borderRadius:"0px 10px 10px 0px"}}
          className=" h-full w-[60vw] border-none outline-none bg-none bg-[#9181F41A] pl-2 text-lg"
          type="text"
          placeholder="Search food" onChange={e=>setSearch(e.target.value)} value={search}
        />
      </div>
      <button className="w-[15vw] h-full ml-2 rounded-3xl bg-[#FF0000C7] text-2xl text-white" onClick={getSearchItem}>
        Filter
      </button>
    </div>
  );
}

export default SearchBar;
