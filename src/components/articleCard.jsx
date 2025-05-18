import { PrimaryBtn } from "./ui/primaryBtn";
import { SaveToast } from "./ui/toast";

// ArticleCard is a card which shows some details from the NewsAPI json
export const ArticleCard = ({ article }) => {
  let date = "";
  if (article.publishedAt) {
    const dates = article.publishedAt.slice(0, 10).split("-", 3);
    date = `${dates[1]}/${dates[2]}/${dates[0]}`;
  }
  let desc = "" + article.description;
  if (article.description === null) {
    desc = "No description provided";
  }
  if (desc.length >= 130) {
    desc = desc.slice(0, 130) + "...";
  }

  return (
    <article className="flex flex-col text-left rounded-md border-1 border-gray-300 dark:border-gray-800 shadow-md justify-between w-1/5 not-lg:w-1/3 gap-2">
      <img
        src={article.urlToImage}
        alt={article.title}
        className={`size-fit rounded-tl-md rounded-tr-md border-0 dark:text-white ${
          !article.urlToImage ? "p-2" : ""
        }`}
      />
      <div className="px-2">
        <div className="flex flex-wrap px-2 gap-2 text-gray-500 text-xs dark:text-gray-400">
          <span>{article.source.name}</span>
          <span>-</span>
          <span>{date}</span>
        </div>
        <h1 className="px-2 text-lg font-semibold dark:text-white">
          {article.title}
        </h1>
        <h2 className="px-2">{article.author ? `By ${article.author}` : ""}</h2>
        <p className="px-2 mt-2 text-gray-500 dark:text-gray-400">
          {desc}
        </p>
      </div>
      <div />
      <div className="flex flex-row pb-8 px-4 gap-2">
        <PrimaryBtn>
          <a href={article.url} target="_blank">
            Read Article
          </a>
        </PrimaryBtn>
        <SaveToast article={article} />
      </div>
    </article>
  );
};
