import { Toggle } from "radix-ui";

export const ToggleComponent = ({ ariaLabel, children }) => {
  return (
    <Toggle.Root
      aria-label={ariaLabel}
      className="flex size-[35px] items-center justify-center rounded bg-white leading-4 hover:bg-gray-400 
      transition-all dark:hover:bg-gray-600 dark:bg-black dark:text-white"
    >
      {children}
    </Toggle.Root>
  );
};
