import { SymbolIcon } from "@radix-ui/react-icons";
import { useContext } from "react";
import { ArticleCard } from "../components/articleCard";
import { Title } from "../components/title";
import { PrimaryBtn } from "../components/ui/primaryBtn";
import { ArticlesContext } from "../utils/articlesContext";
import { useOutletContext } from "react-router";

export const Home = () => {
  const [articles, isLoading, error] = useContext(ArticlesContext);
  const [searchResults, setSearchResults] = useOutletContext(); //Context declared in App.jsx 
  

  if (isLoading) {
    return (
      <section className="flex h-screen items-center justify-center bg-navy">
        <SymbolIcon className="size-[35px] animate-spin text-white" />
      </section>
    );
  }
  if (error) {
    return (
      <section className="flex flex-col h-screen items-center justify-center gap-2 bg-navy text-white">
        <p className="text-xl">Something went wrong try again.</p>
        <div>
          <PrimaryBtn onClick={() => window.location.reload()}>
            Refresh
          </PrimaryBtn>
        </div>
      </section>
    );
  }

  return (
    <section className="px-4 lg:w-2/3">
      <Title
        title={"Latest News"}
        subtitle={"Stay updated with the latest news from the Dominican Republic"}
      />
      <section className="flex flex-row flex-wrap gap-6 my-4">
        {searchResults.map((article, i) => (
          <ArticleCard key={i} article={article} />
        ))}
      </section>
    </section>
  );
};
