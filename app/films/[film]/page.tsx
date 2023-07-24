import React from "react";

import Link from "next/link";
import Image from "next/image";
import { BsArrowLeftCircle } from "react-icons/bs";

const page: React.FC = (): React.JSX.Element => {
  return (
    <div>
      <div className="flex justify-between w-80 mt-7 mr-auto ml-auto">
        <Link href={"/films"} className="uppercase flex gap-2 items-center">
          <span>
            <BsArrowLeftCircle />
          </span>
          back
        </Link>

        <Link href={"/"} className="uppercase">
          listings
        </Link>
      </div>

      <div className="relative mt-5 w-100 h-56">
        <Image
          src={"/assets/film-images/trailer.png"}
          alt={"a snapshot of the film asteroid city"}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="p-3 flex flex-col gap-2">
        <h1 className="uppercase font-bold">asteroid city</h1>
        <p className="text-gray-500">
          <span>2023</span> · <span>12A</span> · <span>1h 45m</span>
        </p>
        <p>Comedy</p>
        <p>
          <span className="font-medium">Director</span>: Wes Anderson
        </p>
        <p className="mt-2">
          <span className="uppercase font-medium">Description</span>: Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat.
        </p>
      </div>

      <div className="relative mt-5 w-100 h-40">
        <Image
          src={"/assets/film-images/asteroid-2.png"}
          alt={"a snapshot of the film asteroid city"}
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default page;
