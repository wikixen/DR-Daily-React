// ArticleCard is a card which shows some details from the NewsAPI json
export const ArticleCard = ({ article }) => {
  let date = "";
  if (article.publishedAt) {
    const dates = article.publishedAt.slice(0, 7).split("-", 2);
    date = `${dates[1]}/${dates[0]}`;
  }

  return (
    <article className="flex flex-col border-1 rounded-md justify-between size-[30rem] mx-2 hover:bg-gray-300 transition-colors hover:cursor-pointer dark:hover:bg-gray-800">
      <img
        src={article.urlToImage ? article.urlToImage : null}
        alt={article.description ? article.description : ""}
        className="w-[30rem] h-[15rem] rounded-tl-md rounded-tr-md"
      />
      <div>
          <h1 className="px-2 text-xl font-semibold">
            {article.title ? article.title : "No title provided"}
          </h1>
        <h2 className="px-2">{article.author ? `By ${article.author}` : ""}</h2>
        <h3 className="px-2">{date}</h3>
        <p className="px-2 mt-2">
          {article.description ? article.description : ""}
        </p>
      </div>
      <div />
      <div>
        <p className="p-2 text-right italic">
          {article.source.name
            ? `Read more on ${article.source.name}`
            : ""}
        </p>
      </div>
    </article>
  );
};