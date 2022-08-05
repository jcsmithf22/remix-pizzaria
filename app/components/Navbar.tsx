export default function Navbar() {
  return (
    <div className="bg-indigo-500 border-b border-indigo-700 shadow-xl nav-wrapper">
      <div
        className="
          flex flex-col
          items-center
          max-w-screen-xl
          px-4
          py-3
          mx-auto
          text-indigo-100
          sm:px-8
          lg:flex-row lg:space-y-0
          navbar
          gap-y-4
        "
      >
        <div className="flex items-center flex-auto gap-4 group title">
          <div
            className="
              transition-all
              ease-in-out
              cursor-pointer
              group-hover:rotate-270
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7 lg:w-8 lg:h-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
              <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
            </svg>
          </div>
          <div className="title cursor-pointer">
            <h3 className="text-lg font-main-semibold lg:text-xl">
              Random Lake Pizzeria
            </h3>
          </div>
        </div>

        <nav className="text-base font-main-semibold lg:text-lg">
          <ul className="flex flex-wrap items-center justify-center gap-2 gap-y-4">
            <li>
              <a
                className="
                  p-2
                  transition
                  duration-100
                  ease-out
                  bg-indigo-600
                  rounded-lg
                  cursor-pointer
                  hover:bg-indigo-700
                  lg:hover:bg-transparent lg:bg-transparent
                  hover:text-white
                "
                >Our Story</a
              >
            </li>
            <li>
              <a
                className="
                  p-2
                  transition
                  duration-100
                  ease-out
                  bg-indigo-600
                  rounded-lg
                  cursor-pointer
                  hover:bg-indigo-700 hover:text-white
                  lg:hover:bg-transparent lg:bg-transparent
                "
                >Menu</a
              >
            </li>
            <li className="hidden sm:list-item">
              <a
                className="
                  p-2
                  transition
                  duration-100
                  ease-out
                  bg-indigo-600
                  rounded-lg
                  cursor-pointer
                  hover:bg-indigo-700 hover:text-white
                  lg:hover:bg-transparent lg:bg-transparent
                "
                >Contact Us</a
              >
            </li>
            <li>
              <a
                className="
                  p-2
                  text-red-100
                  transition
                  duration-100
                  ease-out
                  bg-red-600
                  rounded-lg
                  cursor-pointer
                  hover:text-white hover:bg-red-700
                "
                >920-917-1391</a
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}