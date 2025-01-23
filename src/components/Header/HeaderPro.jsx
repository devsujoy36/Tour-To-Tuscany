import { Link, NavLink } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useContext, useState, useEffect, useRef } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const HeaderPro = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const [navSmToggle, setNavSmToggle] = useState(false);
  const menuRef = useRef(null); // Reference for the mobile menu

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/aboutus" },
    { name: "Tour Packages", path: "/tourpackages" },
    { name: "Contact Us", path: "/contactus" },
  ];

  const renderLinks = (className) =>
    navLinks.map((link) => (
      <NavLink
        key={link.path}
        className={`${className} hover:text-[#ffc684] px-2 py-1 rounded-lg active:scale-95 transition-all`}
        to={link.path}
      >
        {link.name}
      </NavLink>
    ));

  const authLinks = !user ? (
    <div className="flex flex-col lg:flex-row gap-5">
      <NavLink
        className="hover:bg-[#FA8B02] px-10 py-2 text-black active:scale-95 rounded-full border-2 hover:border-transparent border-orange-400 transition-all"
        to="/login"
      >
        Login
      </NavLink>
      <NavLink
        className="bg-[#FA8B02] px-10 py-2 active:scale-95 rounded-full hover:bg-transparent border-2 hover:text-orange-400 border-transparent hover:border-orange-400 transition-all"
        to="/signup"
      >
        Sign Up
      </NavLink>
    </div>
  ) : (
    <div className="flex flex-col lg:flex-row gap-6">
      <NavLink
        className="hover:text-[#ffc684] px-4 py-1 rounded-lg active:scale-95 transition-all"
        to="/profile"
      >
        Profile
      </NavLink>
      <button
        onClick={logoutUser}
        className="bg-[#FA8B02] px-10 py-2 active:scale-95 rounded-full hover:bg-transparent border-2 border-transparent hover:border-orange-400 transition-all"
      >
        Log Out
      </button>
    </div>
  );

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setNavSmToggle(false); // Close the menu if clicked outside
      }
    };

    if (navSmToggle) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [navSmToggle]);

  return (
    <div className="fixed w-full z-50 font-open-sans border bg-orange-200 bg-opacity-55 text-black">
      <div className="max-w-screen-2xl lg:mx-auto">
        <nav className="flex justify-between items-center text-xl font-medium py-2 px-5">
          <Link to="/">
            <img
              className="lg:w-20 w-14"
              src="https://i.ibb.co.com/dQ3twTX/navlogo.png"
              alt="Navigation Logo"
            />
          </Link>

          {/* Desktop Links */}
          <div className="lg:flex hidden lg:gap-5 items-center">
            <div className="flex items-center gap-2">{renderLinks("")}</div>
            {authLinks}
          </div>

          {/* Mobile Menu Toggle */}
          <div
            onClick={() => setNavSmToggle(!navSmToggle)}
            className="text-4xl flex lg:hidden bg-orange-400 duration-200 rounded-full p-2 transition-all active:rotate-180"
            aria-label={navSmToggle ? "Open Menu" : "Close Menu"}
            role="button"
          >
            {navSmToggle ? <IoClose /> : <IoMdMenu />}
          </div>

          {/* Mobile Menu */}
          <div
            ref={menuRef} // Attach the ref to the mobile menu
            className={`flex flex-col absolute z-50 mx-2 mt-2 top-20 duration-500 ${
              navSmToggle ? "right-3" : "-right-44"
            } gap-1 border p-3 text-[16px] rounded-lg bg-white`}
          >
            {renderLinks("")}
            {authLinks}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default HeaderPro;
