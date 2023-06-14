import { supabase } from "../services/supabase";

export async function addUserMetadata(userData) {
  const { data, error } = await supabase.from("Users").insert(userData);
  // console.log("[addUserMetadata]: Data & Error: ", data, error)
  return { data, error };
}

export async function updateUserEmailVerificationStatus(userId, status) {
    console.log("[updateUserEmailVerificationStatus] userId: ", userId, " status: ", status);
  const { error } = await supabase
    .from("users")
    .update({ email_verified: status })
    .eq("id", userId);
  if (error) console.log("[updateUserEmailVerificationStatus]: Error: ", error);
  return { error };
}
