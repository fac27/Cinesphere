import React from "react"

type FilterProps = {
  genre: string
}

const FilterTag:React.FC<FilterProps> = ({genre}) => {
  return <button className="bg-slate-300 rounded border-black mx-1 my-1 p-0.5">{genre}</button>
}

export default FilterTag