import { Toggle } from "radix-ui";

export const ToggleComponent = ({ ariaLabel, children }) => {
  return (
    <Toggle.Root
      aria-label={ariaLabel}
      className="flex size-[35px] items-center justify-center border-1 rounded-md
      border-gray-200 bg-white leading-4 hover:bg-red-600 hover:text-white 
      dark:bg-navy dark:text-white dark:border-gray-800
      transition-all cursor-pointer"
    >
      {children}
    </Toggle.Root>
  );
};
