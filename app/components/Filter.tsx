import React from "react"

import FilterTag from "./FilterTag"
const genres = ["Action", "Horror", "Thriller", "Arthouse", "Sci-Fi", "Drama", "Period", "Comedy"]


type FilterProps = {
  genre: string
}

const Filter:React.FC<FilterProps> = () => {
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

