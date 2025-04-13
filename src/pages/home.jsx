import { DialogComponent } from "../components/ui/dialog";
import { ArticleIframe } from "../components/articleIframe";
import { ArticleCard } from "../components/articleCard";
import { useEffect, useState } from "react";
import { SymbolIcon } from "@radix-ui/react-icons";

const URL = "https://newsapi.org/v2"
const API_KEY = import.meta.env.VITE_API_KEY;

// When an article card is clicked the webpage opens in a dialog within an iframe
export const Home = () => {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false)
  const [articles, setArticles] = useState([])

  useEffect(() => {
    const fetchArticles = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${URL}/everything?q=dominican+republic&republica+dominicana&apiKey=${API_KEY}`);
        const articles = await response.json();
        setArticles(articles.articles);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchArticles();
  }, []);

  if (isLoading) {
    return (
      <section className="flex h-screen items-center justify-center">
        <SymbolIcon className="size-[35px] animate-spin" />
      </section>
    )
  }
  if (error) {
    return (
      <section className="flex flex-col h-screen items-center justify-center gap-2">
        <p className="text-xl">Something went wrong try again.</p>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-3 border-1 rounded-md hover:bg-gray-400 hover:cursor-pointer transition-colors"
        >Refresh
        </button>
      </section>
    )
  }
  
  return (
    <section className="flex flex-row flex-wrap gap-2 my-4">
      {articles.map((article, i) => (
        <DialogComponent
          key={i}
          button={<ArticleCard article={article} />}
          children={<ArticleIframe article={article} />}
        />
      ))}
    </section>
  );
};