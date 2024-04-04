import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { MapPinIcon } from "@heroicons/react/16/solid";
import Logo from "../../../assets/images/logo2.png";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsSticky(offset > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/services", text: "Services" },
    { to: "/register", text: "Register" },
    { to: "/login", text: "Login" },
  ];

  return (
    <div className="">
      {/* Upper Row: Contact Info */}
      {/* <div
        className={`container mx-auto flex flex-wrap items-center justify-center md:justify-between  ${
          isSticky ? "h-14 bg-white" : ""
        }`}
      >
        <div className="flex items-center space-x-4">
          <div className="text-black flex items-center space-x-2">
            <PhoneIcon className="w-4 h-4" />
            <a
              href="callto:+35800909090"
              className="text-black hover:underline flex items-center space-x-2"
            >
              +35800909090
            </a>
          </div>
          <div className="text-black flex items-center space-x-2">
            <EnvelopeIcon className="w-4 h-4" />
            <a
              href="mailto:info@example.com"
              className="text-black hover:underline flex items-center space-x-2"
            >
              <span>info@example.com</span>
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-black flex items-center space-x-2">
            <MapPinIcon className="w-4 h-4" />
            <a
              href="#"
              className="text-black hover:underline flex items-center space-x-2"
            >
              Toivoniementie · Oulu
            </a>
          </div>
        </div>
      </div>
      <hr className="border-primary-300" /> */}
      {/* Lower Row: Main Navbar */}
      <nav
        className={` p-2  ${
          isSticky
            ? "md:shadow-lg fixed w-full z-50 bg-white animate-growDown"
            : ""
        }`}
      >
        <div className="container mx-auto flex items-center justify-between">
          <Link
            to="/"
            className="text-black font-bold text-3xl hover:text-amber-950 transition duration-300"
          >
            <img src={Logo} className="mx-auto w-20" alt="logo" width="150" />
          </Link>

          {/* Large Screen Nav Items */}
          <div className="hidden md:flex space-x-4">
            {navLinks.map(({ to, text }) => (
              <Link
                key={to}
                to={to}
                className={`px-3 py-2 rounded transition duration-300 ${
                  location.pathname === to
                    ? "text-primary-900"
                    : "text-amber-950 hover:text-primary-900"
                }`}
              >
                {text}
              </Link>
            ))}
          </div>

          {/* Small Screen Menu Icon */}
          <div className="md:hidden">
            <button className="text-amber-950" onClick={toggleMenu}>
              {isMenuOpen ? (
                <XMarkIcon className="h-7 w-7" />
              ) : (
                <Bars3Icon className="h-7 w-7" />
              )}
            </button>
          </div>

          {/* Small Screen Nav Items */}
          {isMenuOpen && (
            <div
              className={`md:hidden absolute  right-4  bg-white rounded z-50 top-14 ${
                isSticky ? "top-14" : ""
              }`}
            >
              {navLinks.map(({ to, text }) => (
                <Link
                  key={to}
                  to={to}
                  className={`block text-center  px-6 py-2 rounded transition duration-300 ${
                    location.pathname === to
                      ? "bg-primary-400 text-amber-950"
                      : "hover:bg-primary-400  text-primary-900 hover:text-amber-950"
                  }`}
                  onClick={toggleMenu}
                >
                  {text}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
