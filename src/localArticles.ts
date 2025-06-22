const store = "data";

export const saveArticle = (articleUrl: string) => {
  if (localStorage.getItem(store) === null) {
    localStorage.setItem(store, "[]");
  }
  let oldData = JSON.parse(localStorage.getItem(store)!);
  if (!oldData.includes(articleUrl)) {
    oldData.push(articleUrl);
  }

  localStorage.setItem(store, JSON.stringify(oldData));
};

export const removeArticle = (articleUrl: string) => {
  const articles = JSON.parse(localStorage.getItem(store)!);
  articles.splice(articles.indexOf(articleUrl), 1);
  localStorage.setItem(store, JSON.stringify(articles));
};

export const getSavedArticles = () => {
  const savedArticles: string[] = JSON.parse(
    localStorage.getItem(store) as string,
  );
  return savedArticles;
};
