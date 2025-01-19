import { NavLink } from "react-router-dom"
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
const Header = () => {

  
  return (
    <div className="fixed w-full  font-open-sans border bg-orange-200 bg-opacity-55 text-black">
      <div className=" max-w-screen-2xl mx-auto ">
        <nav className=" flex justify-between  items-center text-xl font-medium py-2 px-10">

          <div>
            <img className="w-20" src="https://i.ibb.co.com/dQ3twTX/navlogo.png" alt="navLogo" />
          </div>

          <div className="md:flex hidden gap-5 justify-between items-center">
            <div className="flex  items-center justify-center  gap-5">
              <NavLink className="hover:text-[#ffc684] px-4 py-1 rounded-lg active:scale-95 transition-all" to={"/"}>Home</NavLink>
              <NavLink className="hover:text-[#ffc684] px-4 py-1 rounded-lg active:scale-95 transition-all" to={"/aboutus"}>About Us</NavLink>
              <NavLink className="hover:text-[#ffc684] px-4 py-1 rounded-lg active:scale-95 transition-all" to={"/tourpackages"}>Tour Packages</NavLink>
              <NavLink className="hover:text-[#ffc684] px-4 py-1 rounded-lg active:scale-95 transition-all" to={"/contactus"}>Contact Us</NavLink>
            </div>
            <div className="flex items-center justify-center gap-5 ">
              <NavLink className="hover:bg-[#FA8B02]  px-10 py-2 text-black  active:scale-95 rounded-full  border-2 hover:border-transparent border-orange-400  transition-all" to={"/login"}>Login</NavLink>
              <NavLink className="bg-[#FA8B02] px-10 py-2 active:scale-95 rounded-full hover:bg-transparent border-2 hover:text-orange-400 border-transparent hover:border-orange-400 transition-all" to={"/signup"}>Sign Up</NavLink>
            </div>
          </div>

          <div className="text-5xl bg-white rounded-md">
            <IoMdMenu />
            <IoClose />
          </div>

          <div className="flex flex-col absolute top-24 right-3 gap-2 border p-3 text-[18px] rounded-lg bg-white">
            <div className="flex flex-col gap-2">
              <NavLink className="hover:text-[#ffc684] px-2 py-1 rounded-lg active:scale-95 transition-all" to={"/"}>Home</NavLink>
              <NavLink className="hover:text-[#ffc684] px-2 py-1 rounded-lg active:scale-95 transition-all" to={"/aboutus"}>About Us</NavLink>
              <NavLink className="hover:text-[#ffc684] px-2 py-1 rounded-lg active:scale-95 transition-all" to={"/tourpackages"}>Tour Packages</NavLink>
              <NavLink className="hover:text-[#ffc684] px-2 py-1 rounded-lg active:scale-95 transition-all" to={"/contactus"}>Contact Us</NavLink>
            </div>
            <div className="flex flex-col gap-2 text-center">
              <NavLink className="hover:bg-[#FA8B02]  px-2 py-1 text-black  active:scale-95 rounded-full  border-2 hover:border-transparent border-orange-400  transition-all" to={"/login"}>Login</NavLink>
              <NavLink className="bg-[#FA8B02] px-2 py-1 active:scale-95 rounded-full hover:bg-transparent border-2 hover:text-orange-400 border-transparent hover:border-orange-400 transition-all" to={"/signup"}>Sign Up</NavLink>
            </div>
          </div>

        </nav>
      </div>
    </div>
  )
}

export default Header