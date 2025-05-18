import {
  BookmarkIcon,
  HomeIcon,
  MoonIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import { Link } from "react-router";
import { ToggleComponent } from "./ui/toggle";
import { Search } from "./search";

export const Header = ({ theme, setTheme, setSearchResults }) => (
  <header className="flex flex-row justify-between items-center p-4 lg:w-2/3">
    <h1 className="flex gap-1 text-4xl">
      <span className="text-[#093e74] font-bold">
        DR
      </span>
      <span className="text-[#b01c1c] font-light">
        Daily
      </span>
    </h1>
    <Search setSearchResults={setSearchResults} />
    <div className="flex flex-row gap-2">
      <ToggleComponent
        ariaLabel="Go to Home"
        children={
          <Link to="/">
            <HomeIcon />
          </Link>
        }
      />
      {/* <ToggleComponent
        ariaLabel="Go to Saved Articles"
        children={
          <Link to="/bookmarks">
            <BookmarkIcon />
          </Link>
        }
      /> */}
      <ToggleComponent
        ariaLabel="Toggle theme"
        children={
          <div onClick={() => setTheme(!theme)} className="cursor-pointer">
            {theme ? <MoonIcon /> : <SunIcon />}
          </div>
        }
      />
    </div>
  </header>
);
