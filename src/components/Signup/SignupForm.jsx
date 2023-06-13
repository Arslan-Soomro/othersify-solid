import { createSignal } from "solid-js";
import * as Yup from "yup";
import { validate } from "../../utils/utils";

// Create a user validation schema with Yup
const userValidationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
  confirm_password: Yup.string().required("Confirm Password is required").oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

function SignupForm() {

  const [errors, setErrors] = createSignal(null);

  async function handleSubmit(e) {
    e.preventDefault();

    // Extract Form Data
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      confirm_password: e.target.confirm_password.value,
    };

    // Validate Form Data
    const {data, errors} = await validate(formData, userValidationSchema);
    setErrors(errors);
    if(errors) return; 

    // Submit Form Data to Supabase
  }

  return (
    <form onSubmit={handleSubmit} class="mt-8 grid grid-cols-6 gap-6">
      <div class="col-span-6">
        <label for="Name" class="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="Name"
          name="name"
          class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
        />
        {errors()?.name ? <p class="text-sm text-red-500 ml-2 mt-1">{errors()?.name}</p> : null}
      </div>

      <div class="col-span-6">
        <label for="Email" class="block text-sm font-medium text-gray-700">
          Email
        </label>

        <input
          type="email"
          id="Email"
          name="email"
          class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
        />
        {errors()?.email ? <p class="text-sm text-red-500 ml-2 mt-1">{errors()?.email}</p> : null}

      </div>

      <div class="col-span-6 sm:col-span-3">
        <label for="Password" class="block text-sm font-medium text-gray-700">
          Password
        </label>

        <input
          type="password"
          id="Password"
          name="password"
          class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
        />
        {errors()?.password ? <p class="text-sm text-red-500 ml-2 mt-1">{errors()?.password}</p> : null}

      </div>

      <div class="col-span-6 sm:col-span-3">
        <label
          for="PasswordConfirmation"
          class="block text-sm font-medium text-gray-700"
        >
          Password Confirmation
        </label>

        <input
          type="password"
          id="PasswordConfirmation"
          name="confirm_password"
          class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
        />
        {errors()?.confirm_password ? <p class="text-sm text-red-500 ml-2 mt-1">{errors()?.confirm_password}</p> : null}

      </div>

      <div class="col-span-6">
        <label for="MarketingAccept" class="flex gap-4">
          <input
            type="checkbox"
            id="MarketingAccept"
            name="marketing_accept"
            class="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
          />

          <span class="text-sm text-gray-700">
            I want to receive emails about events, product updates and company
            announcements.
          </span>
        </label>
      </div>

      <div class="col-span-6">
        <p class="text-sm text-gray-500">
          By creating an account, you agree to our
          <a href="#" class="text-gray-700 underline">
            terms and conditions
          </a>
          and
          <a href="#" class="text-gray-700 underline">
            privacy policy
          </a>
          .
        </p>
      </div>

      <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
        <button class="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
          Create an account
        </button>

        <p class="mt-4 text-sm text-gray-500 sm:mt-0">
          Already have an account?
          <a href="#" class="text-gray-700 underline">
            Log in
          </a>
          .
        </p>
      </div>
    </form>
  );
}

export default SignupForm;
