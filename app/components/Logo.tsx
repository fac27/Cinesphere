import Link from "next/link";
import { PiFilmReelLight } from "react-icons/pi";

const Logo = () => {
  return (
    <Link href={"/"} className="flex gap-1 items-center justify-center">
      <span className="text-2xl">
        <PiFilmReelLight />
      </span>
      <h1 className="underline text-3xl">cinesphere</h1>
    </Link>
  );
};
export default Logo;
