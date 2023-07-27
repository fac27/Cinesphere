import React, { Dispatch, SetStateAction } from "react";
import Filter from "./Filter";
import { genres, languages, era } from "@/Data/Filters";

interface Props {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}

const FilterModal = ({ isVisible, setIsVisible }: Props): React.JSX.Element => {
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

export default FilterModal;