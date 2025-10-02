import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState, useRef, useEffect } from "react";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, setUser } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const profileRef = useRef(null);

  const handleLogout = () => {
    setUser(null);
    setShowDropdown(false);
  };

  const handleProfileClick = () => {
    if (!user) {
      toast.error("Please Register || Login");
    } else {
      setShowDropdown((prev) => !prev);
    }
  };

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        dropdownRef.current &&
        !profileRef.current.contains(e.target) &&!dropdownRef.current.contains(e.target)
      ) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className=" shadow-lg px-6 py-4 flex items-center justify-between bg-transparent">
      <div className="flex items-center gap-2 ">
        <a
          className="flex items-center space-x-2 hover:scale-105 transition-transform"
          href="http://jssaten.ac.in//index"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/jsslogoicon.png" className="w-8 h-8" />
          <span className="text-blue-600 font-semibold"></span>
        </a>
        <span className="text-2xl font-extrabold text-blue-600 tracking-tight">
          HostelHub
        </span>
      </div>

      <div className="hidden md:flex gap-6 text-base font-medium text-gray-700">
        <NavLink
          to="/"
          className="relative text-lg hover:text-blue-500 transition-colors text-white duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full   p-2"
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className="relative text-lg hover:text-blue-500 transition-colors text-white duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full   p-2"
        >
          About Us
        </NavLink>
        <NavLink
          to="/hostels"
          className="relative text-lg hover:text-blue-500 transition-colors text-white duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full  p-2 rounded-2xl"
        >
          Hostels
        </NavLink>
        <NavLink
          to="/reviews"
          className="relative text-lg hover:text-blue-500 transition-colors text-white duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full  p-2 rounded-2xl"
        >
          Reviews
        </NavLink>
      </div>

      <div className="flex items-center gap-4 relative">
        {!user && (
          <div className="space-x-4">
            <NavLink
              to="/Register"
              className="relative hover:text-blue-900 transition-colors text-indigo-700 font-semibold duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full rounded-s-2xl p-2"
            >
              Sign Up
            </NavLink>
            <NavLink
              to="/Login"
              className="relative hover:text-blue-900 transition-colors text-indigo-700 font-semibold duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full rounded-r-2xl p-2"
            >
              Log In
            </NavLink>
          </div>
        )}
        <div className="flex items-center gap-4 relative">
          <div
            ref={profileRef}
            onClick={handleProfileClick}
            className={`w-10 h-10 rounded-full  shadow-md transition-transform duration-300 hover:scale-105 cursor-pointer ${
              !user ? "opacity-60" : ""
            }`}
          >
            <img            
              src={user?.avatar || "/profile.png"}
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover shadow-md transition-transform duration-300 hover:scale-105 cursor-pointer"
            />
          </div>
          {user && (
            <div
              ref={dropdownRef}
              className={`absolute right-0 top-14 w-56 bg-white border border-gray-200 rounded-xl shadow-lg z-50 overflow-hidden transform transition-all duration-300 ease-out ${
                showDropdown
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-3 pointer-events-none"
              }`}
            >
              <NavLink
                to="/profile"
                className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
              >
                My Profile
              </NavLink>
              <NavLink
                to="/activity"
                className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
              >
                Activity
              </NavLink>
              <NavLink
                to="/edit-profile"
                className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
              >
                Edit Profile
              </NavLink>
              <NavLink
                to="/status"
                className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
              >
                Status
              </NavLink>
              <hr className="my-1" />
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-red-500 hover:bg-red-50 hover:text-red-600 transition"
              >
                Log Out
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
