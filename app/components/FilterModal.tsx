import React, { Dispatch, SetStateAction } from "react";

import Filter from "./Filter";
import { languages, era } from "@/Data/Filters";
import { useFilters } from "../Context/store";


interface Props {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}

const FilterModal = ({ isVisible, setIsVisible }: Props): React.JSX.Element => {


  const filterContext = useFilters();
  const genres = filterContext?.genres as string[];

  return (
    <dialog open={isVisible} className="text-center my-4 z-50">
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