import { supabase } from "../services/supabase"

export async function addUserMetadata(userData) {
    const { data, error } = await supabase.from("Users").insert(userData);
      // console.log("[addUserMetadata]: Data & Error: ", data, error)
      return { data, error }
}