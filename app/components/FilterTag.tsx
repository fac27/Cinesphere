import React from "react"

type Props = {
  filter: string
}

const FilterTag = ({filter}: Props) => {
  return <button className="bg-slate-300 rounded border-black mx-1 my-1 p-0.5">{filter}</button>
}

export default FilterTag