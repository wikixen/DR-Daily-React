export const PrimaryBtn = ({ children }) => (
  <button className="px-4 py-2 rounded-md text-white bg-sea hover:bg-sea-light w-full 
      dark:bg-ocean dark:hover:bg-blue-900
      transition-colors cursor-pointer">
    {children}
  </button>
);
