export const POST = async (req: Request) => {
  try {
    const { postcode } = await req.json();
    const response = await fetch(
      `https://api.postcodes.io/postcodes/${postcode}`
    );

    const data = await response.json();
    const lon = data.result.longitude;
    const lat = data.result.latitude;

    return new Response(JSON.stringify({ lat, lon }));
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "404" }));
  }
};
