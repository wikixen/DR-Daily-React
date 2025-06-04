import { BookmarkFilledIcon, BookmarkIcon, Cross1Icon } from "@radix-ui/react-icons";
import { Toast } from "radix-ui";
import { useEffect, useRef, useState } from "react";

export const SaveToast = ({ article }) => {
  const [open, setOpen] = useState(false);
  const [saved, setSaved] = useState(false);
  const articleNameRef = useRef("");
  const timerRef = useRef(0);

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <Toast.Provider swipeDirection="right" label="Bookmark">
      <button
        className="p-3 rounded-4xl text-white bg-gray-600 hover:bg-gray-800 transition-colors cursor-pointer"
        onClick={() => {
          setOpen(false);
          setSaved(!saved);
          clearTimeout(timerRef.current);
          timerRef.current = setTimeout(() => {
            articleNameRef.current = article.title
            setOpen(true);
          }, 100);
        }}
      >
        {saved ? <BookmarkFilledIcon /> : <BookmarkIcon />}
      </button>

      <Toast.Root
        className="grid grid-cols-[auto_max-content] items-center gap-x-[15px] rounded-md bg-white dark:bg-navy p-[15px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] [grid-template-areas:_'title_action'_'description_action'] data-[swipe=cancel]:translate-x-0 data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[state=closed]:animate-hide data-[state=open]:animate-slideIn data-[swipe=end]:animate-swipeOut data-[swipe=cancel]:transition-[transform_200ms_ease-out]"
        open={open}
        onOpenChange={setOpen}
        type="foreground"
      >
        <Toast.Title className="mb-[5px] text-[15px] font-medium [grid-area:_title] text-black dark:text-white">
          {saved ? "Added to Bookmarks" : "Removed from Bookmarks"}
        </Toast.Title>
        <Toast.Description asChild>
          <p className="m-0 text-[13px] leading-[1.3][grid-area:_description] text-black dark:text-white">
            {articleNameRef.current}
          </p>
        </Toast.Description>
        <Toast.Action
          altText="Close"
          className="[grid-area:_action] text-gray-500 hover:text-black  dark:text-gray-400 dark:hover:text-white cursor-pointer"
          asChild
        >
          <button type="button">
            <Cross1Icon />
          </button>
        </Toast.Action>
      </Toast.Root>
      <Toast.Viewport className="fixed bottom-0 right-0 z-[2147483647] m-0 flex w-[390px] max-w-[100vw] list-none flex-col gap-2.5 p-[var(--viewport-padding)] outline-none [--viewport-padding:_25px]" />
    </Toast.Provider>
  );
};
