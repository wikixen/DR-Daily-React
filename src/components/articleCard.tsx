import { useState } from "react";
import { PiBookmarkSimpleFill, PiBookmarkSimpleLight } from "react-icons/pi";
import { getSavedArticles, removeArticle, saveArticle } from "../localArticles";
import { Article } from "../model";
import { Btn } from "./ui/btn";

interface Props {
  article: Article;
}
export const ArticleCard = ({ article }: Props) => {
  const [saved, setSaved] = useState<boolean>(false);

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

  if (!article.url) {
    return <></>;
  } else {
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
          <h2 className="px-2">
            {article.author ? `By ${article.author}` : ""}
          </h2>
          <p className="px-2 mt-2 text-gray-500 dark:text-gray-400">
            {desc}
          </p>
        </div>
        <div />
        <div className="grid grid-cols-[1fr_auto] pb-8 px-4 gap-2">
          <Btn>
            <a href={article.url} target="_blank">
              Read Article
            </a>
          </Btn>
          <Btn
            onClick={() => {
              if (saved) {
                removeArticle(article.url!);
              } else {
                saveArticle(article.url!);
              }
              setSaved(!saved);
            }}
          >
            {getSavedArticles() && getSavedArticles().includes(article.url)
              ? <PiBookmarkSimpleFill />
              : <PiBookmarkSimpleLight />}
          </Btn>
        </div>
      </article>
    );
  }
};
