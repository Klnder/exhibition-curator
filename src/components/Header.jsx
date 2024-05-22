import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="navbar bg-base-300 fixed top-0 w-full z-50 flex-col">
      <div className="flex flex-shrink justify-center w-full">
        <Link to="/home" className="btn btn-ghost text-xl bg-base-300">
          Exhibition Creator
        </Link>
      </div>
      <div className="flex flex-shrink justify-center w-full">
        <Link to="/home" className="btn btn-ghost text-md bg-base-300 mr-4">
          Home
        </Link>
        <Link to="/mygallerie" className="btn btn-ghost text-md bg-base-300">
          My gallery
        </Link>
      </div>
    </header>
  );
}

export default Header;
