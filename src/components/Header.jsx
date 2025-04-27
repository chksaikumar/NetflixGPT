import React, { useState, useEffect, useRef } from "react";
import { auth } from "../utils/firebase"; // adjust path if needed
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "./Redux/Store/UserSlice";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full py-4 px-6 md:px-12 bg-gradient-to-b from-black to-transparent z-10 flex items-center justify-between">
      {/* Netflix Logo */}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
        className="h-8 md:h-10 cursor-pointer"
        onClick={() => navigate("/browse")}
      />

      {/* Navigation Links */}

      {user ? (
        <>
          <div className="hidden md:flex space-x-6 text-white text-sm font-medium">
            <a href="#home" className="hover:text-gray-400">
              Home
            </a>
            <a href="#tvshows" className="hover:text-gray-400">
              TV Shows
            </a>
            <a href="#movies" className="hover:text-gray-400">
              Movies
            </a>
            <a href="#newpopular" className="hover:text-gray-400">
              New & Popular
            </a>
            <a href="#mylist" className="hover:text-gray-400">
              My List
            </a>
          </div>

          {/* Profile and Dropdown */}
          <div
            ref={dropdownRef}
            className="relative flex items-center space-x-2"
          >
            <img
              src={user.photoURL}
              alt="Profile"
              className="h-8 w-8 md:h-10 md:w-10 rounded cursor-pointer"
              onClick={() => setShowDropdown((prev) => !prev)}
            />
            {/* Arrow */}
            <svg
              onClick={() => setShowDropdown((prev) => !prev)}
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-white cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>

            {showDropdown && (
              <div className="absolute right-0 top-12 bg-black border border-gray-700 rounded-md py-2 w-40 flex flex-col text-white shadow-lg">
                <button
                  onClick={handleSignOut}
                  className="px-4 py-2 text-sm hover:bg-gray-800 text-left"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Header;
