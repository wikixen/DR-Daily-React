import { ToggleGroup } from "radix-ui";

export const ToggleGrp = ({ items }) => {
  return (
    <ToggleGroup.Root
      type="single"
      defaultValue="0"
      aria-label="Filter artciles by topic"
      className="flex items-center w-full h-11 text-sm px-1 gap-1 rounded-md bg-gray-100 dark:bg-navy-light"
    >
      {items.map((item, i) => (
        <ToggleGroup.Item
          key={i}
          value={i.toString()}
          aria-label={`${item} Tab`}
          className="py-2 px-3 h-10/12 text-gray-400 bg-transparent rounded-md
            data-[state=on]:bg-white data-[state=on]:shadow-2xs data-[state=on]:text-black
            dark:data-[state=on]:bg-navy dark:data-[state=on]:shadow-2xs dark:data-[state=on]:text-white
            cursor-pointer"
        >
          {item}
        </ToggleGroup.Item>
      ))}
    </ToggleGroup.Root>
  );
};
