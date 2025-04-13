import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import React from "react";
import { ToggleComponent } from "./ui/toggle";

export const Header = ({ theme, setTheme }) => {

  return (
    <header className="flex flex-row justify-between mx-2 my-3">
      <h1 className="text-4xl font-semibold">
        DR Daily
      </h1>
      <div className="flex flex-row gap-2">
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
};
