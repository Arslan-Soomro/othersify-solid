import { createSignal } from "solid-js";
import * as Yup from "yup";
import toast from "solid-toast";
import { supabase } from "../../services/supabase";
import { validate } from "../../utils/utils";
import { useNavigate } from "@solidjs/router";

// Create a user validation schema with yup
const userValidationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be 6 characters or more"),
});

function LoginForm() {
  const [isLoading, setIsLoading] = createSignal(false);
  const [errors, setErrors] = createSignal(null);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    // Extract Form Data
    const formData = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    // Validate Form Data
    const { errors } = await validate(formData, userValidationSchema);
    setErrors(errors);
    if (errors) {
      console.log("Validation Errors: ", errors);
      return;
    }

    setIsLoading(true);
    const toastId = toast.loading("Logging you in...");

    // Submit Form Data to Supabase
    const { data, error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });

    if (error) {
      setIsLoading(false);
      console.log(
        "[handleSubmit] error: ",
        JSON.stringify(error),
      );
      toast.error(error.message, { id: toastId });
      return;
    } else {
      console.log("[handleSubmit] data: ", data);
      setIsLoading(false);
      e.target.reset();
      toast.success("Logged in succsesfully.", { id: toastId });
      // Eventually later we should redirect to page that shows collection of apps
      navigate("/a/email/app");
    }
  }

  return (
    <form onSubmit={handleSubmit} class="mt-10">
      <div class="grid gap-y-4">
        {/* <!-- Form Group --> */}
        <div>
          <label for="email" class="block text-sm mb-2 dark:text-white">
            Email address
          </label>
          <div class="relative">
            <input
              type="email"
              id="email"
              name="email"
              class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
              required
              aria-describedby="email-error"
            />
            {errors()?.email ? (
              <div class=" absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                <svg
                  class="h-5 w-5 text-red-500"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                </svg>
              </div>
            ) : null}
          </div>
          {errors()?.email ? (
            <p class="text-xs text-red-600 mt-2" id="email-error">
              {errors()?.email}
            </p>
          ) : null}
        </div>
        {/* <!-- End Form Group --> */}

        {/* <!-- Form Group --> */}
        <div>
          <div class="flex justify-between items-center">
            <label for="password" class="block text-sm mb-2 dark:text-white">
              Password
            </label>
            <a
              class="text-sm text-blue-600 decoration-2 hover:underline font-medium"
              href="../examples/html/recover-account.html"
            >
              Forgot password?
            </a>
          </div>
          <div class="relative">
            <input
              type="password"
              id="password"
              name="password"
              class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
              required
              aria-describedby="password-error"
            />
            {errors()?.password ? (
              <div class="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                <svg
                  class="h-5 w-5 text-red-500"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                </svg>
              </div>
            ) : null}
          </div>
          {errors()?.password ? (
            <p class="text-xs text-red-600 mt-2" id="password-error">
              {errors()?.password}
            </p>
          ) : null}
        </div>
        {/* <!-- End Form Group --> */}

        {/* <!-- Checkbox --> */}
        <div class="flex items-center">
          <div class="flex">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
            />
          </div>
          <div class="ml-3">
            <label for="remember-me" class="text-sm dark:text-white">
              Remember me
            </label>
          </div>
        </div>
        {/* <!-- End Checkbox --> */}

        <button
          type="submit"
          class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
        >
          Login
        </button>
        <p class="text-sm text-gray-500 mt-0 text-center">
          Don't have an account?
          <a href="#" class="text-gray-700 underline">
            Signup
          </a>
          .
        </p>
      </div>
    </form>
  );
}

export default LoginForm;
