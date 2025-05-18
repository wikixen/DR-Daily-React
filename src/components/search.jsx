import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useContext, useEffect } from "react";
import { ArticlesContext } from "../utils/articlesContext";

export const Search = ({setSearchResults}) => {
  const [articles,error, isLoading] = useContext(ArticlesContext)

  const handleSearch = (e) => {
    if (!e.target.value) {
      return setSearchResults(articles)
    }
    const results = articles.filter(article => article.title.includes(e.target.value))
    setSearchResults(results)
  }
  return (
    <form
      className="h-auto w-96 flex items-center not-lg:w-2/3 justify-between gap-2 rounded-md border-1 border-gray-200 dark:text-gray-300"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        className="py-2 px-3 focus:outline-none w-full"
        type="search"
        id="search"
        placeholder="Search articles..."
        onChange={handleSearch}
      />
      <button className="p-3">
        <MagnifyingGlassIcon />
      </button>
    </form>
  )
}