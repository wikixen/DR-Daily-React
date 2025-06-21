import { Link } from "@tanstack/react-router";
import {
  PiBookmarkSimpleFill,
  PiBookmarkSimpleLight,
  PiHouseSimpleFill,
  PiHouseSimpleLight,
  PiMagnifyingGlass,
} from "react-icons/pi";
import { Btn } from "./ui/btn";

function Header() {
  return (
    <header className="flex flex-row justify-between items-center p-4">
      <h1 className="flex gap-1 text-4xl">
        <span className="text-[#093e74] font-bold">
          DR
        </span>
        <span className="text-[#b01c1c] font-light">
          Daily
        </span>
      </h1>
      <form
        className="h-auto w-96 flex items-center not-lg:w-2/3 justify-between gap-2 rounded-md border-1 border-gray-200 dark:text-gray-300"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="py-2 px-3 focus:outline-none w-full"
          type="search"
          id="search"
          placeholder="Search articles..."
          // onChange={handleSearch}
        />
        <button className="p-3">
          <PiMagnifyingGlass />
        </button>
      </form>
      <nav className="flex flex-row gap-2">
          <Link
            to="/"
            className="flex gap-2 items-center"
            children={({ isActive }) => (
              <>
                {isActive
                  ? (
                    <Btn>
                      <span className="flex gap-2 items-center">
                        <PiHouseSimpleFill />
                        <p>Home</p>
                      </span>
                    </Btn>
                  )
                  : (
                    <Btn>
                      <span className="flex gap-2 items-center">
                        <PiHouseSimpleLight />
                        <p>Home</p>
                      </span>
                    </Btn>
                  )}
              </>
            )}
          />
          <Link
            to="/bookmarks"
            children={({ isActive }) => (
              <>
                {isActive
                  ? (
                    <Btn>
                      <span className="flex gap-2 items-center">
                        <PiBookmarkSimpleFill />
                        <p>Bookmarks</p>
                      </span>
                    </Btn>
                  )
                  : (
                    <Btn>
                      <span className="flex gap-2 items-center">
                        <PiBookmarkSimpleLight />
                        <p>Bookmarks</p>
                      </span>
                    </Btn>
                  )}
              </>
            )}
          />
      </nav>
    </header>
  );
}

export default Header;
