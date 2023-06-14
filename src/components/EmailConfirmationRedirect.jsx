// Users are redirected to this page after they click on the link in the email they receive after signing up.

import { createEffect } from "solid-js";
import { useAuthContext } from "../context/AuthContext";
import Spinner from "./ui/Spinner";
import { useNavigate } from "@solidjs/router";
import { updateUserEmailVerificationStatus } from "../utils/supaUtils";

// This page is responsible for verifying the user's email address. and updating the supabase user metadata table.
function EmailConfirmationRedirect() {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  createEffect(() => {
    if (user()) {
      updateUserEmailVerificationStatus(user().id, true).then((res) => {
        console.log("res: ", res);
        navigate("/a/email/app", { replace: true });
      }) 
    }
  });

  return (
    <div class="w-full h-full flex flex-col items-center justify-center gap-3">
      <Spinner />
      <p class="text-center">Redirecting...</p>
    </div>
  );
}

export default EmailConfirmationRedirect;
