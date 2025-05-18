import { BookmarkIcon } from "@radix-ui/react-icons";
import { Title } from "../components/title";

export const Bookmarks = () => {
  const savedArticles = [];
  if (savedArticles.length < 1) {
    return (
      <section className="px-4 lg:w-2/3 h-full">
        <Title
          title={"Bookmarks"}
          subtitle={"Articles you've saved for reading later"}
        />
        <section className="flex flex-col gap-2 items-center">
          <BookmarkIcon className="size-8 text-gray-500 mb-8" />
          <h3 className="text-xl font-semibold">No bookmarks yet</h3>
          <p className="w-1/2 text-center text-gray-500">
            When you find articles you'd like to read later, tap the bookmark
            icon to save them here.
          </p>
        </section>
      </section>
    );
  } else {
    return (
      <section className="px-4 lg:w-2/3">
        <Title
          title={"Bookmarks"}
          subtitle={"Articles you've saved for reading later"}
        />
      </section>
    );
  }
};
