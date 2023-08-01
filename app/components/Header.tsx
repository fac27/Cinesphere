"use client";
import { useState } from "react";

import { PiFilmReelLight } from "react-icons/pi";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="h-14 bg-bgColour1 grid grid-cols-3 items-center">
        <div></div>

        <Link href={"/"} className="flex gap-1 items-center justify-center">
          <span className="text-2xl">
            <PiFilmReelLight />
          </span>
          <h1 className="underline text-3xl">cinesphere</h1>
        </Link>

        <FiMenu
          className="cursor-pointer text-5xl justify-self-end mr-3"
          onClick={() => setOpen(!open)}
        />
      </div>

      <nav
        className={`absolute -right-4 transform ${
          open ? "-translate-x-4" : "translate-x-full"
        } transition-transform duration-300 ease-in-out flex-column justify-end mr-2 z-50`}
      >
        <ul className="my-4 bg-white text-center text-3xl">
          <li className="p-2.5 border border-black">
            <a href="/">Home</a>
          </li>
          <li className="p-2.5 border border-black">
            <a href="/films">Films</a>
          </li>
          <li className="p-2.5 border border-black">
            <a href="/cinemas">Cinemas</a>
          </li>
          <li className="p-2.5 border border-black">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
