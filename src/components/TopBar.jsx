import React from "react";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div>
      {/* top bar */}
      <div
        className="fixed top-0 h-10 lg:h-14 lg:right-4 w-screen 
          z-100 lg:z-10 bg-orange-300 lg:rounded-b-3xl flex flex-row-reverse 
          
          "
      >
        {/* buttons */}
        <div className="relative flex gap-5 mx-auto xl:gap-10 text-sm lg:text-base 2xl:text-2xl lg:left-50 top-0 self-center">
          <Link to="/">
            <button className="btn cursor-pointer-paw hover:text-amber-100">
              Home
            </button>
          </Link>
          <Link to="/programming">
            <button className="btn cursor-pointer-paw hover:text-amber-100">
              Programming
            </button>
          </Link>
          <Link to="/websites">
            <button className="btn cursor-pointer-paw hover:text-amber-100">
              Websites
            </button>
          </Link>
          <Link to="/3ddesign">
            <button className="btn cursor-pointer-paw hover:text-amber-100">
              3D Design
            </button>
          </Link>
          <Link to="/aboutme">
            <button className="btn cursor-pointer-paw hover:text-amber-100">
              About Me
            </button>
          </Link>
          <Link to="/contact">
            <button className="btn cursor-pointer-paw hover:text-amber-100">
              Contact
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
