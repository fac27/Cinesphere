import Filter from "./Filter";
// eslint-disable-next-line no-unused-vars
import { genres, languages, ageRating, era, score } from "@/Data/Filters";

interface Props {
  isVisible: boolean;
  selectedGenres: string[];
  setSelectedGenres: (selectedGenres: string[]) => void;
  selectedLanguages: string[];
  setSelectedLanguages: (selectedLanguages: string[]) => void;
  selectedDecades: string[];
  setSelectedDecades: (selectedDecades: string[]) => void;
}

const Modal = ({
  isVisible,
  selectedGenres,
  setSelectedGenres,
  selectedLanguages,
  setSelectedLanguages,
  selectedDecades,
  setSelectedDecades,
}: Props) => {
  return (
    <dialog open={isVisible ? true : undefined} className="text-center my-4">
      <Filter
        filters={genres}
        category="GENRE"
        selectedFilters={selectedGenres}
        onFilterClick={(filter: string) =>
          setSelectedGenres((prevGenres) =>
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
        onFilterClick={(filter: string) =>
          setSelectedLanguages((prevLanguages) =>
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
        onFilterClick={(filter: string) =>
          setSelectedDecades((prevDecades) =>
            prevDecades.includes(filter)
              ? prevDecades.filter((d) => d !== filter)
              : [...prevDecades, filter]
          )
        }
      />
      
      
      {/* <Filter filters={ageRating} category="AGE RATING" />
      <Filter filters={score} category="SCORE" /> */}
      <form method="dialog">
        <button type="submit" className="p-2 text-white bg-black rounded-lg">
          Done
        </button>
      </form>
    </dialog>
  );
};

export default Modal;
