import { createFileRoute } from "@tanstack/react-router";
import { PiBookmark } from "react-icons/pi";
import { ArticleCard } from "../components/articleCard";
import { PageTitle } from "../components/pageTitle";
import { getSavedArticles } from "../localArticles";
import sample from "../sample.json";

export const Route = createFileRoute("/bookmarks")({
  component: RouteComponent,
});

function RouteComponent() {
  const savedArticles = getSavedArticles();
  console.log(savedArticles);

  if (savedArticles.length > 0) {
    // Finds all saved articles by filtering out those whose URLs dont match
    const articles = sample.filter((item) => savedArticles.includes(item.url));

    return (
      <div>
        <PageTitle
          title={"Bookmarks"}
          subtitle={"Articles you've saved for reading later"}
        />
        <section className="flex flex-wrap gap-8">
          {articles.map((article) => (
            <ArticleCard article={article} key={article.url} />
          ))}
        </section>
      </div>
    );
  } else {
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
}
