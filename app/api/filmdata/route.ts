import { FilmType } from "@/Types/Object-Interfaces";

export const POST = async (req: Request): Promise<Response> => {
  try {
    const filmData: FilmType = await req.json();
    return new Response(JSON.stringify(filmData));
  } catch (error) {
    console.error("Error parsing JSON data:", error);
    return new Response("Error parsing JSON data.", { status: 500 });
  }
};
