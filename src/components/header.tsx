import {
  Link,
  useLocation,
  useNavigate,
  useSearch,
} from "@tanstack/react-router";
import {
  PiBookBookmark,
  PiBookBookmarkFill,
  PiHouseSimpleFill,
  PiHouseSimpleLight,
  PiMagnifyingGlass,
} from "react-icons/pi";
import { Route } from "../routes/index";
import { Btn } from "./ui/btn";

function Header() {
  const navigate = useNavigate({ from: Route.fullPath });
  const currentUrl = useLocation();
  const { q } = useSearch({
    from: currentUrl.pathname === "/" ? "/" : "/bookmarks",
  });

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
          value={q}
          placeholder="Search articles..."
          onChange={(e) =>
            navigate({ search: (prev) => ({ ...prev, q: e.target.value }) })}
        />
        <button type="submit" className="p-3">
          <PiMagnifyingGlass />
        </button>
      </form>
      <nav className="flex flex-row gap-2">
        <Link
          to="/"
          search={{ q: "" }}
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
          search={{ q: "" }}
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
