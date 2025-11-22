import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState, useRef, useEffect } from "react";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, setUser } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const profileRef = useRef(null);

  const handleLogout = () => {
    setUser(null);
    setShowDropdown(false);
  };

  const handleProfileClick = () => {
    if (!user) toast.error("Please Register || Login");
    else setShowDropdown((prev) => !prev);
  };

  // close dropdown when clicked outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (
        dropdownRef.current &&
        !profileRef.current.contains(e.target) &&
        !dropdownRef.current.contains(e.target)
      ) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // handle scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const textColor = scrolled ? "text-white" : "text-black";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out transform
        ${
          scrolled
            ? "bg-gradient-to-r from-[#1e3a8a]/95 to-[#3b82f6]/95 shadow-lg backdrop-blur-md translate-y-0"
            : "bg-transparent translate-y-0"
        } animate-fadeDown`}
    >
      <div className="px-6 py-4 flex items-center justify-between">
        {/* Left logo */}
        <div className="flex items-center gap-2 animate-slideInLeft">
          <a
            className="flex items-center space-x-2 hover:scale-105 transition-transform"
            href="http://jssaten.ac.in//index"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/jsslogoicon.png" className="w-8 h-8" />
          </a>
          <span
            className={`text-2xl font-extrabold tracking-tight drop-shadow-md ${textColor}`}
          >
            HostelHub
          </span>
        </div>

        {/* Center links */}
        <div
          className={`hidden md:flex gap-6 text-base font-medium transition-colors duration-0 ${textColor}`}
        >
          {["Home", "About Us", "Hostels", "Reviews"].map((label) => (
            <NavLink
              key={label}
              to={`/${label === "Home" ? "" : label.toLowerCase().replace(" ", "")}`}
              className={`relative text-lg hover:text-yellow-300 transition-all duration-300 
              after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] 
              after:bg-yellow-300 after:transition-all after:duration-300 hover:after:w-full p-2 
              hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]`}
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4 relative animate-slideInRight">
          {!user && (
            <div className="space-x-4">
              <NavLink
                to="/Register"
                className={`relative hover:text-yellow-300 transition-all font-semibold duration-300 
                ${textColor} after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 
                after:h-[2px] after:bg-yellow-300 after:transition-all after:duration-300 hover:after:w-full 
                rounded-s-2xl p-2 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]`}
              >
                Sign Up
              </NavLink>
              <NavLink
                to="/Login"
                className={`relative hover:text-yellow-300 transition-all font-semibold duration-300 
                ${textColor} after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 
                after:h-[2px] after:bg-yellow-300 after:transition-all after:duration-300 hover:after:w-full 
                rounded-r-2xl p-2 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]`}
              >
                Log In
              </NavLink>
            </div>
          )}

          {/* Profile */}
          <div className="flex items-center gap-4 relative">
            <div
              ref={profileRef}
              onClick={handleProfileClick}
              className={`w-10 h-10 rounded-full shadow-md border-2 border-white transition-transform duration-300 hover:scale-110 cursor-pointer ${
                !user ? "opacity-60" : ""
              }`}
            >
              <img
                src={user?.avatar || "/profile.png"}
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover"
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
      </div>
    </nav>
  );
};

export default Navbar;
