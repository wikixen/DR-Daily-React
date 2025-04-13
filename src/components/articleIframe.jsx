// ArticleIframe opens articles in an iframe using the provided URL
export const ArticleIframe = ({ article }) => {
  return (
    <iframe
      id="articleIframe"
      title={article.title}
      src={article.url}
      className="w-full h-[75rem]"
    />
  );
};