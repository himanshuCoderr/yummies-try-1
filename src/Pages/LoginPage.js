import React, { useState } from "react";
import Logo from "../../src/images/logo.png";
import { EmailOutlined } from "@mui/icons-material";
import HttpsIcon from "@mui/icons-material/Https";
import { Link } from "react-router-dom";

function LoginPage() {
const [email,setEmail] = useState('')
const [passcode,setPasscode] = useState('')

  const handleLogin = (e)=>{
    e.preventDefault()
    const loginData = {
      email,
      passcode
    }
    
    console.log(loginData)  

  }

  return (
    <div className="w-[100vw] h-[100vh] bg-[#FFFDF7] ">
      <nav className="flex items-center m-2 ">
        <Link to="/">
          <img src={Logo} alt="" className="w-12 rounded-full" />
        </Link>
        <h1 className="text-xl ml-2 font-semibold">YUMMIES DELIVERY APP</h1>
      </nav>
      <form onClick={handleLogin} className="w-[60vw] h-[70vh] flex flex-col m-auto items-center justify-between ">
        <h2 className="font-bold text-xl ">LOGIN</h2>
        <div className="flex items-center">
          <EmailOutlined
            className="bg-[#9181F41A]"
            style={{
              height: "60px",
              paddingLeft: "10px",
              width: "40px",
              borderRadius: "10px 0px 0px 10px",
            }}
          />
          <input
            style={{ borderRadius: "0px 10px 10px 0px" }}
            className=" h-[60px] w-[40vw] border-none outline-none bg-none bg-[#9181F41A] pl-2 text-lg"
            type="email"
            placeholder="Email"
            value={email}
            onChange={e=>setEmail(e.target.value)}
          />
        </div>
        <div className="flex items-center">
          <HttpsIcon
            className="bg-[#9181F41A]"
            style={{
              height: "60px",
              paddingLeft: "10px",
              width: "40px",
              borderRadius: "10px 0px 0px 10px",
            }}
          />
          <input
            style={{ borderRadius: "0px 10px 10px 0px" }}
            className=" h-[60px] w-[40vw] border-none outline-none bg-none bg-[#9181F41A] pl-2 text-lg"
            type="password"
            placeholder="Password"
            value={passcode}
            onChange={e=>setPasscode(e.target.value)}
          />
        </div>
        <button className="w-[18vw] py-5 bg-red-500 rounded-xl text-white text-xl">
          Login Now
        </button>
        <p className="text-[#DE1D1D] font-bold text-lg">Forget Password ?</p>
        <Link to="/signup">
          <p className="font-bold text-xl">Click here to Register</p>
        </Link>
      </form>
    </div>
  );
}

export default LoginPage;
