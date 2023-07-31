// import { CinemaType } from "@/Types/Object-Interfaces";
import supabaseClient from "./supabaseClient";

const getAllCinemas = async () => {
  const { data, error } = await supabaseClient
  .from('venue')
  .select("*")
  if (error) {
    console.log(`Error getting cinemas: ${error.message}`);
    throw error;
  }
console.log(data)
return data
}

export default getAllCinemas;
