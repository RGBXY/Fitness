"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="fixed z-50 top-0 left-0 flex justify-between items-center h-[4.5rem] bg-black w-full px-5 lg:px-20">
      <Image className="w-32 lg:w-36" height={160} width={160} src={"/assets/logo.svg"} alt="logo" />
      <ul
        className={`${
          isOpen ? "right-0" : " -right-1/2"
        } flex lg:items-center lg:flex-row lg:relative lg:right-0 lg:w-auto lg:pt-0 lg:border-0 lg:bg-transparent lg:h-full gap-4 flex-col px-8 pt-14 h-screen w-[45%] absolute top-0 bg-black border-l border-l-white text-sm transition-all duration-300 ease-in-out`}
      >
        <li>
          <Link href="/" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link href="#about" onClick={closeMenu}>
            About Us
          </Link>
        </li>
        <li>
          <Link href="#trainer" onClick={closeMenu}>
            Trainer
          </Link>
        </li>
        <li>
          <Link href="#review" onClick={closeMenu}>
            Review
          </Link>
        </li>
        {isOpen && (
          <button onClick={closeMenu} className="lg:hidden absolute top-5 right-5 text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        )}
      </ul>
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
