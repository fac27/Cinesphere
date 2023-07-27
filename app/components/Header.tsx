"use client";
import { useState } from "react";

import { PiFilmReelLight } from "react-icons/pi";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="h-14 flex items-center justify-between bg-bgColour1">
        <Link href={"/"} className="flex gap-1 items-center">
          <span className="text-2xl ml-3">
            <PiFilmReelLight />
          </span>
          <h1 className="underline text-2xl">cinesphere</h1>
        </Link>

        <FiMenu
          className="cursor-pointer mr-3"
          onClick={() => setOpen(!open)}
        />
      </div>

      <nav
        className={`absolute right-0 ${open ? "flex" : "hidden"} flex-column justify-end mr-2 z-50`}
      >
        <ul className="my-4 bg-white text-center">
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
