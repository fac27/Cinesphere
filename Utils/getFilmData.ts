const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOTY3NGQ3ZjE0MDIxMjFkMjMwZDcwMGE3OGM1MTRhNCIsInN1YiI6IjY0YjkxMzgzMjdkYjYxMDBlMjkxYTBlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UgU_Jv7qcmzuH3FgCHSC9azGce4OrH1Z_05DsZ5imJU",
  },
};

const imdb_id_elemental = "tt15789038";

const data = fetch(
  `https://api.themoviedb.org/3/find/${imdb_id_elemental}?external_source=imdb_id`,
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response.movie_results[0].overview))
  .catch((err) => console.error(err));
