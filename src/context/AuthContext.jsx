import { createSignal, createContext, useContext } from "solid-js";
import { supabase } from "../services/supabase";
import LoadingScreen from "../components/LoadingScreen";

const AuthContext = createContext();

export function AuthProvider(props) {
  const [user, setUser] = createSignal(null);
  const [userMetadata, setUserMetadata] = createSignal(null);
  const [isLoading, setIsLoading] = createSignal(true);

  const onAuthStateChange = async () => {
    try {
      setIsLoading(true);
      const {
        data: { user },
      } = await supabase.auth.getUser(); // Get User
      console.log("AauthContextProvider] user: ", user);
      if (user) {
        setUser(user);
        const { data, error } = await supabase // Get User Metadata by Email
          .from("users")
          .select()
          .eq("id", user?.id);
        if (error)
          console.log("[AuthContextProvider] Error@userMetadata: ", error);
        if (data) {
          // console.log("[authContextProvider] User Metadata: ", data[0]);
          setIsLoading(false);
          setUserMetadata(data[0]);
        }
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log("[AuthContextProvider] Error: ", error.message);
    }
  };

  onAuthStateChange();

  return (
    <AuthContext.Provider value={{ user, userMetadata }}>
      {/* Wait till the user loads so that whenever children consume the context, they have some value to work with */}
      <Show when={!isLoading()} fallback={<LoadingScreen />}>
        {props.children}
      </Show>
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
