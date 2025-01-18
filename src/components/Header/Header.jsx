import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <div className="sticky top-0">
      <div className="max-w-screen-2xl md:mx-auto mx-10">
        <nav>
          <div>
            <img src="https://i.ibb.co.com/dQ3twTX/navlogo.png" alt="navLogo" />
          </div>
          <div>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/"}>About Us</NavLink>
            <NavLink to={"/"}>Tour Packages</NavLink>
            <NavLink to={"/"}>Contact Us</NavLink>
          </div>
          <div>
            <NavLink to={"/"}>Login</NavLink>
            <NavLink to={"/"}>Sign Up</NavLink>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Header