import { Dispatch, SetStateAction } from "react";
import Filter from "./Filter";
import { genres, languages, ageRating, era, score } from "@/Data/Filters";

interface Props {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}

const Modal = ({ isVisible, setIsVisible }: Props): React.JSX.Element => {
  return (
    <dialog open={isVisible} className="text-center my-4">
      <Filter filters={genres} category="GENRE" />
      <Filter filters={languages} category="LANGUAGE" />
      <Filter filters={era} category="ERA" />
      <button
        type="button"
        onClick={() => {
          setIsVisible(false);
        }}
        className="p-2 text-white bg-black rounded-lg"
      >
        Done
      </button>
    </dialog>
  );
};

export default Modal;
