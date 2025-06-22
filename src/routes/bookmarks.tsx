import { createFileRoute, useSearch } from "@tanstack/react-router";
import { PiBookmark } from "react-icons/pi";
import { ArticleCard } from "../components/articleCard";
import { PageTitle } from "../components/pageTitle";
import { getSavedArticles } from "../localArticles";
import { Article } from "../model";

export const Route = createFileRoute("/bookmarks")({
  component: RouteComponent,
  validateSearch: (search) => {
    return {
      q: (search.q as string) || "",
    };
  },
  loaderDeps: ({ search: { q } }) => ({ q }),
  loader: async ({ context }) => {
    const feed = await context.feed;
    return feed;
  },
});

function RouteComponent() {
  const articles = Route.useLoaderData().articles;
  const savedUrls = getSavedArticles();
  const { q } = useSearch({ from: "/bookmarks" });

  if (!(savedUrls.length > 0)) {
    return (
      <section className="px-4 h-full">
        <PageTitle
          title={"Bookmarks"}
          subtitle={"Articles you've saved for reading later"}
        />
        <section className="flex flex-col gap-2 items-center">
          <PiBookmark className="size-8 text-gray-500 mb-8" />
          <h3 className="text-xl font-semibold">No bookmarks yet</h3>
          <p className="w-1/2 text-center text-gray-500">
            When you find articles you'd like to read later, tap the bookmark
            icon to save them here.
          </p>
        </section>
      </section>
    );
  }
  // Finds all saved articles by filtering out those whose URLs dont match
  const savedArticles: Article[] = articles.filter((article) =>
    savedUrls.includes(article.url!)
  );

  const filteredArticles = savedArticles.filter((article) =>
    article.title!.includes(q)
  );

  return (
    <div>
      <PageTitle
        title={"Bookmarks"}
        subtitle={"Articles you've saved for reading later"}
      />
      <section className="flex flex-wrap gap-8">
        {filteredArticles.map((article) => (
          <ArticleCard article={article} key={article.url} />
        ))}
      </section>
    </div>
  );
}
