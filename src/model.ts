export interface Feed {
  articles: Article[];
  status: string;
  totalResults: number;
}

export interface Article {
  author?: string;
  content?: string;
  description?: string;
  publishedAt?: string;
  source: Source;
  title?: string;
  url?: string;
  urlToImage?: string;
}

interface Source {
  id?: string;
  name?: string;
}