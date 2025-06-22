import { createFileRoute } from "@tanstack/react-router";
import { PageTitle } from "../components/pageTitle";
import sample from "../sample.json";
import { ArticleCard } from "../components/articleCard";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const articles = sample;
  return (
    <div>
      <PageTitle
        title={"Latest News"}
        subtitle={"Stay updated with the latest news from the Dominican Republic"}
      />
      <section className="flex flex-wrap gap-8">
        {articles.map((article) => (
          <ArticleCard article={article} key={article.url} />
        ))}
      </section>
    </div>
  );
}
