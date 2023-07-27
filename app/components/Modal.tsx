import React, { Dispatch, SetStateAction } from "react";

import Filter from "./Filter";
import { exampleGenres, languages, era } from "@/Data/Filters";
import { useFilters } from "@/app/Context/store";

interface Props {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}

const Modal = ({ isVisible, setIsVisible }: Props): React.JSX.Element => {

  const filterContext = useFilters();
  const genres = filterContext?.genres as string[];
  const setGenres = filterContext?.setGenres as React.Dispatch<React.SetStateAction<string[]>>;

  setGenres(exampleGenres)
  // setGenres(genres)


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
