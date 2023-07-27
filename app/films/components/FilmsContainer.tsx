import { getImdbIds } from "@/Utils/getImdbIds";
import FilmCard from "./FilmCard";
import { useEffect, useState } from "react";
import { getFilmData } from "@/Utils/getFilmData";
import { useFilters } from "@/app/Context/store";
import { FilmType } from "@/Types/Object-Interfaces";
import screenings from "@/Data/Screenings";
import { genreCodes, languageCodes } from "@/Data/FilteringCodes";

const FilmsContainer = () => {
  const [filmData, setFilmData] = useState<any[]>([]);

  useEffect(() => {
    const imdb_id_arr = getImdbIds(screenings);

    const fetchData = async () => {
      try {
        const filmDataArr = await Promise.all(
          imdb_id_arr.map((element: any) => getFilmData(element))
        );
        setFilmData(filmDataArr);
      } catch (error: unknown) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const filterContext = useFilters();

  const filteredFilmData = filmData.filter((film) => {
    const selectedGenres = filterContext?.selectedGenres as string[];
    const selectedLanguages = filterContext?.selectedLanguages as string[];
    const selectedDecades = filterContext?.selectedDecades as string[];
    const genreCodesArr = [];
    const languageCodesArr = [];
    for (let genre of selectedGenres) {
      genreCodesArr.push(genreCodes[genre]);
    }
    for (let language of selectedLanguages) {
      languageCodesArr.push(languageCodes[language]);
    }

    const isGenreMatch =
      selectedGenres.length === 0 ||
      genreCodesArr.some((genreCode) =>
        film.genres.find(
          (genre: { id: number; name: string }) => genre.id === genreCode
        )
      );

    const isLanguageMatch =
      selectedLanguages.length === 0 ||
      languageCodesArr.some((languageCode) =>
        film.original_language.includes(languageCode)
      );

    const isDecadeMatch =
      selectedDecades.length === 0 ||
      selectedDecades.some((decade) => {
        const filmReleaseYear = parseInt(film.release_date.substring(0, 4));
        const selectedDecadeStartYear = parseInt(decade);
        return (
          filmReleaseYear >= selectedDecadeStartYear &&
          filmReleaseYear <= selectedDecadeStartYear + 9
        );
      });

    return isGenreMatch && isDecadeMatch && isLanguageMatch;
  });

  return (
    <>
      <div className="flex-col flex items-center mt-4">
        {filteredFilmData.map((film: FilmType) => (
          <FilmCard key={film.id} film={film} />
        ))}
      </div>
    </>
  );
};

export default FilmsContainer;
