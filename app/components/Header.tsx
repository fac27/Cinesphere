"use client";
import { PiFilmReelLight } from "react-icons/pi";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="h-14 flex items-center justify-between bg-bgColour1">
      <div className="flex gap-1 items-center">
        <span className="text-2xl ml-3">
          <PiFilmReelLight />
        </span>
        <h1 className="underline text-2xl">cinesphere</h1>
      </div>

      <FiMenu className="cursor-pointer mr-3" onClick={() => setOpen(!open)} />

      <nav className={`${open ? "block" : "hidden"} flex flex-column `}>
        <ul>
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
