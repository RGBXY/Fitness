import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between px-14 py-10 font-semibold text-2xl h-full lg:h-20 w-full bg-primary">
        <h1 className="text-xl lg:text-4xl font-semibold font-serif">Join Our Member Now!</h1>
        <button className="py-3 px-8 bg-yellow-500 rounded-lg text-base">Contact</button>
      </div>
      <div className="bg-[#1AB9BFA1] px-14 py-8 gap-8 flex flex-col justify-center items-center">
        <Image className="w-32 lg:w-36" height={200} width={200} src={"assets/logo.svg"} alt="logo" />
        <ul className="flex items-center flex-wrap gap-5 border-b-2 border-[#AAA6A640] w-full text-sm justify-center pb-8">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Trainer</a>
          </li>
          <li>
            <a href="">Program</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
        <p className="text-center">&#169; 2023 Fitnes. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
