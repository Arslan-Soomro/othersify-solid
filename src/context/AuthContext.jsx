import { createSignal, createContext, useContext } from "solid-js";
import { supabase } from "../services/supabase";

const AuthContext = createContext();

export function AuthProvider(props) {
  const [user, setUser] = createSignal(null);
  const [userMetadata, setUserMetadata] = createSignal(null);

  const onAuthStateChange = async () => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser(); // Get User
      console.log("AauthContextProvider] user: ", user);
      if (user) {
        setUser(user);
        const { data, error } = await supabase // Get User Metadata by Email
          .from("users")
          .select()
          .eq("id", user?.id)
        if (error) console.log("[AuthContextProvider] Error@userMetadata: ", error);
        if (data) {
          // console.log("[authContextProvider] User Metadata: ", data[0]);
          setUserMetadata(data[0]);
        }
      }
    } catch (error) {
      console.log("[AuthContextProvider] Error: ", error.message);
    }
  };

  onAuthStateChange();

  return (
    <AuthContext.Provider value={{ user, userMetadata }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() { return useContext(AuthContext); }
