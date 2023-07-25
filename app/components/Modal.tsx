import Filter from "./Filter";
// eslint-disable-next-line no-unused-vars
import { genres, languages, ageRating, era, score } from "@/Data/Filters";

interface Props {
  isVisible: boolean;
  selectedGenres: string[];
  setSelectedGenres: (selectedGenres: string[]) => void;
}

const Modal = ({ isVisible, selectedGenres, setSelectedGenres }: Props) => {
  // const handleGenreClick = (genre: string) => {
  //   setSelectedGenres((prevGenres) =>
  //     prevGenres.includes(genre)
  //       ? prevGenres.filter((g) => g !== genre)
  //       : [...prevGenres, genre]
  //   );
  // };

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

      {/* <Filter filters={languages} category="LANGUAGE" />
      <Filter filters={ageRating} category="AGE RATING" />
      <Filter filters={era} category="ERA" />
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
