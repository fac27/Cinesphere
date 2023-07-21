// const imdb_id_elemental = "tt15789038";
// const imdb_id_indiana = "tt1462764";

export const getFilmData = async (imdb_film_id: string) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/find/${imdb_film_id}?external_source=imdb_id`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOTY3NGQ3ZjE0MDIxMjFkMjMwZDcwMGE3OGM1MTRhNCIsInN1YiI6IjY0YjkxMzgzMjdkYjYxMDBlMjkxYTBlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UgU_Jv7qcmzuH3FgCHSC9azGce4OrH1Z_05DsZ5imJU",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    const filmData = data.movie_results[0];

    console.log(filmData)

    return filmData;
  } catch (err) {
    console.error(err);
    return null;
  }
};
