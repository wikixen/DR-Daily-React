const store = "savedArticles"

export const saveArticle = (articleUrl: string) => {
  localStorage.setItem(store, JSON.stringify(articleUrl))
}

export const removeArticle = (articleUrl: string) => {
  // const newArticles = localStorage.getItem(store).splice
  // localStorage.removeItem(store, JSON.parse(articleUrl))
}

export const getSavedArticles = () => {
  const savedArticles: string[] = JSON.parse(localStorage.getItem(store) as string)
  return savedArticles
}