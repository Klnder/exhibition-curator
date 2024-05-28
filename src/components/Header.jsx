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
    </header>
  );
}

export default Header;
