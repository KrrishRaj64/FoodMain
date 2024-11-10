import React from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Food Paradise</a>
      </div>
      {/* Navigation Links */}
      <div className="hidden md:flex ">
        <Link to="/" className="btn btn-ghost">Home</Link>
        <Link to="/about" className="btn btn-ghost">About</Link>
        <Link to="/menu" className="btn btn-ghost">Menu</Link>
        <Link to="/contact" className="btn btn-ghost">Cart</Link>
      </div>

      {/* Mobile Navigation - Hamburger Dropdown */}
      <div className="md:hidden flex-none z-10">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary><GiHamburgerMenu /></summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/contact">Cart</Link></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="User Avatar"
                src="https://usercontent.one/wp/manforhimself.com/wp-content/uploads/2022/02/ksi-dreadlock-bun-with-undercut-mens-hairstyles-man-for-himself-1-600x600.jpg?media=1728223447"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
