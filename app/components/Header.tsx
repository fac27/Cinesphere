"use client";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className=" bg-bgColour1 grid grid-cols-3 items-center">
        {/* this div is to ensure the logo is centered in the grid */}
        <div></div>

        <Logo />

        <FiMenu
          className="cursor-pointer text-5xl justify-self-end mr-3"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>

      <NavLinks isOpen={isOpen} />
    </>
  );
};

export default Header;
