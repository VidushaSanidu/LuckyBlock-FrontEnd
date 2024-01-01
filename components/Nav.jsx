"use client";

export default function NavBar() {
  return (
    <nav
      className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 bg-violet-100"
      aria-label="Global"
    >
      <div className="flex lg:flex-1">
        <a href="/" className="-m-1.5 p-1.5">
          <span className="sr-only">Lucky Block</span>
          <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="logo"
          />
        </a>
        <h1 className="p-1 font-sans md:text-xl">Lucky Block Lottery App</h1>
      </div>

      <div className="lg:flex lg:flex-1 lg:justify-end">
        <a
          href="#"
          className="text-md  md:text-xl font-semibold leading-6 text-gray-900"
        >
          Connect
          <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </nav>
  );
}
