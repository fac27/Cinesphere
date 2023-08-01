import supabaseClient from "./supabaseClient";

const getAllScreenings = async () => {
  const { data, error } = await supabaseClient
    .from("screening")
    .select("id")
    .select("*");
  if (error) {
    console.log(`Error getting cinemas: ${error.message}`);
    throw error;
  }

  return data;
};

export default getAllScreenings;
