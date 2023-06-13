function Navbar() {
  return (
    <header class="shadow-sm">
      <div class="mx-auto max-w-screen-xl p-3">
        <div class="flex items-center justify-between gap-4 lg:gap-10">
          <div class="flex lg:w-0 lg:flex-1">
            <a href="#" class="mr-3">
              <span class="sr-only">Logo</span>
              <span class="inline-block rounded-lg font-prime text-lg text-gray-700">Othersify</span>
            </a>
          </div>

          <nav
            aria-label="Global"
            class="hidden gap-8 text-sm font-medium md:flex"
          >
            <a class="text-gray-500" href="">
              About
            </a>
            <a class="text-gray-500" href="">
              Blog
            </a>
            <a class="text-gray-500" href="">
              Projects
            </a>
            <a class="text-gray-500" href="">
              Contact
            </a>
          </nav>

          <div class="hidden flex-1 items-center justify-end gap-4 sm:flex">
            <a
              class="rounded-lg bg-gray-100 px-5 py-2 text-sm font-medium text-gray-500"
              href=""
            >
              Log in
            </a>

            <a
              class="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white"
              href=""
            >
              Sign up
            </a>
          </div>

          <div class="lg:hidden">
            <button
              class="rounded-lg bg-gray-100 p-2 text-gray-600"
              type="button"
            >
              <span class="sr-only">Open menu</span>
              <svg
                aria-hidden="true"
                class="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewbox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
