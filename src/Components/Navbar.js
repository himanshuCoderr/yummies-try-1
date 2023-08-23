import React from "react";
import logo from "../images/logo.png";
import Avatar from '../images/Avatar.PNG'
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="flex items-center justify-between" >
      <div  className="flex items-center " >
        <Link to="/" >
        <img src={logo} alt="" className="w-12 rounded-full" />
        </Link>
        <h2 className="text-2xl ml-2 font-semibold " >YUMMIES DELIVERY APP</h2>
      </div>
      <div className="flex items-center " >
        <Link to="/login" >
        <p className="mx-2 text-lg font-semibold ">Login</p>
        </Link>
        <img src={Avatar} alt="" className="w-12" />
      </div>
    </div>
  );
}

export default Navbar;
