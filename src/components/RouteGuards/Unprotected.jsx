import { useState, useEffect } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/router";
import LoadingScreen from "@/components/LoadingScreen";
import { cookies } from "next/headers";

function Unprotected(RouteComponent) {
  return RouteComponent;

  const withAuth = (props) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const supabase = createClientComponentClient({ cookies });

    useEffect(() => {
      (async () => {
        const {
          data: { session },
        } = await supabase.auth.getSession();
        setIsLoading(false);
        console.log("[Protected] SUPA SESSION: ", session);
        if (session) {
          router.push("/dashboard");
        }
      })();
    }, []);

    if (isLoading) return <LoadingScreen />;

    return <RouteComponent />;
  };

  return withAuth;
}

export default Unprotected;
