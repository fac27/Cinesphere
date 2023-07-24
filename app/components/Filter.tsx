import FilterTag from "./FilterTag"
const genres = ["Action", "Horror", "Thriller", "Arthouse", "Sci-Fi", "Drama", "Period", "Comedy"]

const Filter = () => {
  return (
  <>
  <div className="bg-black text-white text-center p-2">
    <h1>GENRE</h1>
  </div>
  {genres.map(genre => <FilterTag key={genre} genre={genre}/>)}
  </>
  )
}

export default Filter

