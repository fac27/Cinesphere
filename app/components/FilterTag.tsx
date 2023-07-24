import React from "react"

type Props = {
  genre: string
}

const FilterTag:React.FC<Props> = ({genre}) => {
  return <button className="bg-slate-300 rounded border-black mx-1 my-1 p-0.5">{genre}</button>
}

export default FilterTag