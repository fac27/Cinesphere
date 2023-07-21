"use client";
import { PiFilmReelLight } from "react-icons/pi";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center justify-between xl:max-w-7xl xl:mx-auto max-w-full bg-bgColour1 flex-wrap w-full">
      <div className="flex gap-1 items-center">
        <span className="text-2xl">
          <PiFilmReelLight />
        </span>
        <h1 className="underline text-2xl">cinesphere</h1>
      </div>

      <FiMenu
        className="lg:hidden block cursor-pointer"
        onClick={() => setOpen(!open)}
      />

      <nav
        className={`${
          open ? "block" : "hidden"
        } w-full lg:flex lg:w-auto lg:items-center`}
      >
        <ul className="flex justify-between">
          <li className="lg:px-5">
            <a href="/">Home</a>
          </li>
          <li className="lg:px-5">
            <a href="/films">Films</a>
          </li>
          <li className="lg:px-5">
            <a href="/cinemas">Cinemas</a>
          </li>
          <li className="lg:px-5">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
