import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import { Header } from "./components/header";
import { ArticlesContext } from "./utils/articlesContext";

const URL = "https://newsapi.org/v2";
const API_KEY = import.meta.env.VITE_API_KEY;

export default function App() {
  const [theme, setTheme] = useState(false);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [searchResults, setSearchResults] = useState([]); 

  useEffect(() => {
    const fetchArticles = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `${URL}/everything?q=dominican+republic&republica+dominicana&apiKey=${API_KEY}`,
        );
        const articles = await response.json();
        setArticles(articles.articles);
        setSearchResults(articles.articles);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchArticles();
  }, []);

  return (
    <ArticlesContext.Provider value={[articles, error, isLoading]}>
        <main
          className={`${theme ? "dark" : ""} 
          flex flex-col min-h-screen dark:bg-navy lg:items-center min-w-screen
          transition-colors
          `}
        >
          <Header theme={theme} setTheme={setTheme} setSearchResults={setSearchResults} />
          <hr className="border-b-1 border-gray-100 dark:border-gray-800 w-full" />
        <Outlet context={[searchResults, setSearchResults]} />
        </main>
    </ArticlesContext.Provider>
  );
}
