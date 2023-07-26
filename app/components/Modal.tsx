import React, { FC } from "react";

import Filter from "./Filter";
// eslint-disable-next-line no-unused-vars
import { genres, languages, ageRating, era, score } from "@/Data/Filters";
import { useFilters } from "../Context/store";

interface Props {
  isVisible: boolean;
}

const Modal = ({ isVisible }: Props): React.JSX.Element => {
  const selectedGenres = useFilters();
  const setSelectedGenres = useFilters();
  const selectedLanguages = useFilters();
  const setSelectedLanguages = useFilters();
  const selectedDecades = useFilters();
  const setSelectedDecades = useFilters();

  return (
    <dialog open={isVisible} className="text-center my-4">
      <Filter
        filters={genres}
        category="GENRE"
        selectedFilters={selectedGenres}
      />
      <Filter
        filters={languages}
        category="LANGUAGE"
        selectedFilters={selectedLanguages}
      />
      <Filter filters={era} category="ERA" />
      <form method="dialog">
        <button type="submit" className="p-2 text-white bg-black rounded-lg">
          Done
        </button>
      </form>
    </dialog>
  );
};

export default Modal;
