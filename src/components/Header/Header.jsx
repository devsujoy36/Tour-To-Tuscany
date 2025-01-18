import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <div className="fixed w-full  font-open-sans border bg-white bg-opacity-55 text-white">
      <div className=" max-w-screen-2xl mx-auto ">
        <nav className=" flex justify-between items-center text-xl font-medium py-2 px-10">

          <NavLink to={"/"}>
            <img className="w-20" src="https://i.ibb.co.com/dQ3twTX/navlogo.png" alt="navLogo" />
          </NavLink>

          <div className="flex items-center justify-center text-black gap-10">
            <NavLink className="hover:text-[#FA8B02] active:scale-95 transition-all" to={"/"}>Home</NavLink>
            <NavLink className="hover:text-[#FA8B02] active:scale-95 transition-all" to={"/aboutus"}>About Us</NavLink>
            <NavLink className="hover:text-[#FA8B02] active:scale-95 transition-all" to={"/tourpackage"}>Tour Packages</NavLink>
            <NavLink className="hover:text-[#FA8B02] active:scale-95 transition-all" to={"/contactus"}>Contact Us</NavLink>
          </div>

          <div className="flex items-center justify-center gap-5">
            <NavLink className="hover:bg-[#FA8B02] px-10 py-2 active:scale-95 rounded-full  border hover:border-transparent border-white transition-all" to={"/login"}>Login</NavLink>

            <NavLink className="bg-[#FA8B02] px-10 py-2 active:scale-95 rounded-full hover:bg-transparent border border-transparent hover:border-white transition-all" to={"/signup"}>Sign Up</NavLink>
          </div>

        </nav>
      </div>
    </div>
  )
}

export default Header