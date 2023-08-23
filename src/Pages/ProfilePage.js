import React from "react";
import Logo from "../../src/images/logo.png";
import Avatar from "../images/Avatar.PNG";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

function ProfilePage() {
  return (
    <div>
      <nav className="flex items-center">
        <img src={Logo} alt="" className="w-12 rounded-full" />
        <h2 className="text-2xl ml-2 font-semibold">YUMMIES DELIVERY APP</h2>
      </nav>
      <div className="100vw">
        <h2 className="text-center font-semibold text-2xl mb-3">PROFILE</h2>
        <div className="flex items-center justify-around bg-[#C4CDD580] rounded-2xl mx-2 py-4">
          <img src={Avatar} alt="" className="w-[150px] rounded-full" />
          <div className="flex flex-col leading-10 text-xl font-bold">
            <p>Manisha Yadav</p>
            <p>manisha@gmail.com</p>
          </div>
        </div>
        <div className="h-[60px] bg-[#DFE3E880] mt-2 rounded-2xl mx-2 flex items-center justify-between">
          <div className="flex items-center">
            <PermIdentityIcon className="mx-2 text-xl " />
            <div className="ml-10 leading-loose ">
              <p className="font-bold">My account</p>
              <p className="text-sm">Edit your info</p>
            </div>
          </div>
          <NavigateNextIcon className="mr-5" />
        </div>
        <div className="h-[60px] bg-[#DFE3E880] mt-2 rounded-2xl mx-2 flex items-center justify-between">
          <div className="flex items-center">
            <BusinessCenterIcon className="mx-2 text-xl " />
            <div className="ml-10 leading-loose ">
              <p className="font-bold">My Orders</p>
              <p className="text-sm">See your order history</p>
            </div>
          </div>
          <NavigateNextIcon className="mr-5" />
        </div>
        <div className="h-[60px] bg-[#DFE3E880] mt-2 rounded-2xl mx-2 flex items-center justify-between">
          <div className="flex items-center">
            <FavoriteBorderIcon className="mx-2 text-xl " />
            <div className="ml-10 leading-loose ">
              <p className="font-bold">Your feedback</p>
              <p className="text-sm">Add your opinions</p>
            </div>
          </div>
          <NavigateNextIcon className="mr-5" />
        </div>
        <h2 className="text-lg mx-5 font-semibold" >More</h2>
        <div className="flex items-center" >
          <div>
            <div className="w-[50vw] h-[60px] bg-[#DFE3E880] flex items-center my-2 rounded-xl mx-2" >
              <HelpOutlineIcon className="mx-2" />
              <p className="mx-3" >Queries</p>
            </div>
            <div className="w-[50vw] h-[60px] bg-[#DFE3E880]  flex items-center rounded-xl mx-2 ">
              <NotificationsNoneIcon className="mx-2" />
              <p className="mx-3" >Help and support</p>
            </div>
          </div>
          <button className="w-[30vw] h-[60px] bg-[#FF5B5B] ml-10 rounded-xl text-xl font-semibold" >Logout</button>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
