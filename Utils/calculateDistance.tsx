export const getCoordinates = async (postcode: any) => {
  const response = await fetch (`https://api.postcodes.io/postcodes/${postcode}`)
  const data = await response.json();
  const lon = data.result.longitude
  const lat = data.result.latitude
  console.log("LONG COORDINATES", lon, "LAT COORDINATES", lat)
  return [lon, lat]
}


export const haversine = (lat1: number, lon1:number, lat2:number, lon2:number) => {
  // Earth's radius in kilometers.
  const R = 6371;

  // Convert latitude and longitude from degrees to radians.
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);

  // The Haversine formula calculates the square of half the chord length between two points.
  // It is a part of the great-circle distance formula for two points on a sphere.
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
    Math.cos(lat2 * (Math.PI / 180)) *
    Math.sin(dLon / 2) *
    Math.sin(dLon / 2);

  // Calculate the central angle (in radians) between the two points.
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  // Calculate the distance using the Haversine formula.
  const distance = R * c;
  console.log("haversine function distance", distance.toFixed(2) + "km")
  return (distance.toFixed(2) + "km")
  
}


export const calculateDistance = async (userPostcode:string, cinPostcode:string) => {
  const [userLon, userLat] = await getCoordinates(userPostcode)
  const [cinLon, cinLat] = await getCoordinates(cinPostcode)
  return haversine(userLon, userLat, cinLon, cinLat)
}





