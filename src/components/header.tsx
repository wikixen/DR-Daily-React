import { Link } from "@tanstack/react-router";
import {
  PiBookBookmark,
  PiBookBookmarkFill,
  PiHouseSimpleFill,
  PiHouseSimpleLight,
  PiMagnifyingGlass,
} from "react-icons/pi";
import { Btn } from "./ui/btn";
import { useState } from "react";
import sample from "../sample.json";
import { Article } from "../model";

function Header() {
  // Need to make this so that it changes values on home screen. I.E need to add context
  const [search, setSearch] = useState<Article[] | undefined>([]);

  const handleSearch = (e: Event) => {
    if (!(e.target as HTMLInputElement).value) {
      return setSearch(sample);
    }
    const results = sample.filter((article) =>
      article.title.includes((e.target as HTMLInputElement).value)
    );
    setSearch(results);
  };

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
          onChange={() => handleSearch}
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
                      <PiBookBookmarkFill />
                      <p>Bookmarks</p>
                    </span>
                  </Btn>
                )
                : (
                  <Btn>
                    <span className="flex gap-2 items-center">
                      <PiBookBookmark />
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
