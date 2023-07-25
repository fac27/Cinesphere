import { NextResponse } from 'next/server'
export const GET = async (postcode: any) => {
  const response = await fetch (`https://api.postcodes.io/postcodes/${postcode}`)
  
  const data = await response.json();
  
  console.log(NextResponse.json({ data }))
  return(NextResponse.json({ data }))

  // const lon = data.result.longitude
  // const lat = data.result.latitude
  
  // console.log("LONG COORDINATES", lon, "LAT COORDINATES", lat)
  // return [lon, lat]
}