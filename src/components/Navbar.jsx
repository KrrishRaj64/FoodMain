import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { themeChange } from 'theme-change';
import { useEffect } from 'react';


const Navbar = () => {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Food Paradise</a>
      </div>
      {/* Navigation Links */}
      <div className="hidden md:flex ">
        <Link to="/" className="btn btn-ghost">Home</Link>
        <Link to="/menu" className="btn btn-ghost">Menu</Link>
        <Link to="/contact" className="btn btn-ghost">Cart</Link>
        <Link to="/about" className="btn btn-ghost">About</Link>
      </div>
      <div>
      <select data-choose-theme className="btn hidden lg:block">
          <option value="lemonade">Luxury</option>
          <option value="coffee">Cupcake</option>
          <option value="valentine">Cyberpunk</option>
        </select>
      </div>

      {/* Mobile Navigation - Hamburger Dropdown */}
      <div className="md:hidden flex-none z-10">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary><GiHamburgerMenu /></summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/contact">Cart</Link></li>
                <li><Link to="/about">About</Link></li>
                <li>
              <select data-choose-theme className="btn w-full">
                <option value="lemonade">Luxury</option>
                <option value="coffee">Cupcake</option>
                <option value="valentine">Cyberpunk</option>
              </select>
            </li>
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
        </div>
      </div>

      {/* Navigation Links (visible on desktop) */}
      <div className="hidden md:flex">
        <Link to="/" className="btn btn-ghost">Home</Link>
        <Link to="/menu" className="btn btn-ghost">Menu</Link>
        <Link to="/contact" className="btn btn-ghost">Cart</Link>
        <Link to="/about" className="btn btn-ghost">About</Link>

        {/* Theme select */}
        {/* Login / Sign Up buttons on desktop */}
        <Link to="/login" className="btn btn-ghost ml-2">Login</Link>
        <Link to="/signup" className="btn btn-ghost ml-2">Sign Up</Link>

        <select data-choose-theme className="btn hidden lg:block">
          <option value="lemonade">Lemonade</option>
          <option value="coffee">Coffee</option>
          <option value="valentine">Valentine</option>
        </select>


      </div>
    </div>
  );
};

export default Navbar;


