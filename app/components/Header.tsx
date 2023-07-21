import { PiFilmReelLight } from "react-icons/pi";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  return (
    <div className="mr-auto ml-auto flex gap-10 bg-bgColour1 p-6 items-center">
      <button className="text-2xl">
        <FiMenu />
      </button>

      <div className="flex gap-1 items-center">
        <span className="text-2xl">
          <PiFilmReelLight />
        </span>
        <h1 className="underline text-2xl">cinesphere</h1>
      </div>
    </div>
  );
};

export default Header;
