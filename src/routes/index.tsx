import { createFileRoute, useSearch } from "@tanstack/react-router";
import { ArticleCard } from "../components/articleCard";
import { PageTitle } from "../components/pageTitle";

export const Route = createFileRoute("/")({
  component: Index,
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

function Index() {
  const articles = Route.useLoaderData().articles;
  const { q } = useSearch({ from: "/" });

  const filteredArticles = articles.filter((article) =>
    article.title!.includes(q)
  );

  if (filteredArticles.length > 0) {
    return (
      <div>
        <PageTitle
          title={"Latest News"}
          subtitle={"Stay updated with the latest news from the Dominican Republic"}
        />
        <section className="flex flex-wrap gap-8">
          {filteredArticles.map((article) => (
            <ArticleCard article={article} key={article.url} />
          ))}
        </section>
      </div>
    );
  } else {
    return (
      <div>
        <section className="flex justify-center py-20">
          <h3 className="text-2xl font-semibold">No results found</h3>
        </section>
      </div>
    );
  }
}
