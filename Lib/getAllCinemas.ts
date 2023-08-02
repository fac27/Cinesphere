import transformObj from "@/Utils/transformObj";
import supabaseClient from "./supabaseClient";

const getAllCinemas = async () => {
  const { data, error } = await supabaseClient
    .from("venue")
    .select("img_exterior")
    .select("img_interior_1")
    .select("img_interior_2")
    .select("img_interior_3")
    .select("*");
  if (error) {
    console.log(`Error getting cinema data: ${error.message}`);
    throw error;
  }

  const transformedData = transformObj(data);
  return transformedData;
};

export default getAllCinemas;
