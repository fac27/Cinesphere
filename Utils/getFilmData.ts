export const getFilmData = async (imdb_film_id: string) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${imdb_film_id}`,
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

    const filmData = await response.json();

    return filmData;
  } catch (err) {
    console.error(err);
    return null;
  }
};
