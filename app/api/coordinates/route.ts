// import { NextResponse, NextRequest } from "next/server";

export const POST = async (req: any, res: any) => {
  try {
  // const response = await fetch(`https://api.postcodes.io/postcodes/${postcode}}`);
  // const data = await response.json();
  // console.log(NextResponse.json({ data }));

    console.log(req.body)
    return res({msg: 'success'});
  } catch(error) {
    console.error(error)
    return res({error: '404'})
  }

  // const lon = data.result.longitude
  // const lat = data.result.latitude

  // console.log("LONG COORDINATES", lon, "LAT COORDINATES", lat)
  // return [lon, lat]
};