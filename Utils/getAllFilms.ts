import { getFilmData } from "./getFilmData";
import { getImdbIds } from "./getImdbIds";
import screenings from "@/Data/Screenings";

export const getAllFilms = async () => {
  const imdb_id_arr: any = getImdbIds(screenings);

  const filmData: any = await Promise.all(
    imdb_id_arr.map((element: any) => getFilmData(element))
  );

  return filmData;
};
