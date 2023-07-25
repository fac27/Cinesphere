import React, { FC } from "react";

import Filter from "./Filter";
// eslint-disable-next-line no-unused-vars
import { genres, languages, ageRating, era, score } from "@/Data/Filters";

const Modal: FC = ({
  isVisible,
  selectedGenres,
  setSelectedGenres,
  selectedLanguages,
  setSelectedLanguages,
  selectedDecades,
  setSelectedDecades,
}: any): React.JSX.Element => {
  
  return (
    <dialog open={isVisible} className="text-center my-4">
      <Filter
        filters={genres}
        category="GENRE"
        selectedFilters={selectedGenres}
        selectFilter={(filter: string) =>
          setSelectedGenres((prevGenres: string[]) =>
            prevGenres.includes(filter)
              ? prevGenres.filter((g) => g !== filter)
              : [...prevGenres, filter]
          )
        }
      />
      <Filter
        filters={languages}
        category="LANGUAGE"
        selectedFilters={selectedLanguages}
        selectFilter={(filter: string) =>
          setSelectedLanguages((prevLanguages: string[]) =>
            prevLanguages.includes(filter)
              ? prevLanguages.filter((l) => l !== filter)
              : [...prevLanguages, filter]
          )
        }
      />
      <Filter
        filters={era}
        category="ERA"
        selectedFilters={selectedDecades}
        selectFilter={(filter: string) =>
          setSelectedDecades((prevDecades: string[]) =>
            prevDecades.includes(filter)
              ? prevDecades.filter((d) => d !== filter)
              : [...prevDecades, filter]
          )
        }
      />
      <form method="dialog">
        <button type="submit" className="p-2 text-white bg-black rounded-lg">
          Done
        </button>
      </form>
    </dialog>
  );
};

export default Modal;
