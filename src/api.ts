import { Feed } from "./model";

const URL = "https://newsapi.org/v2";
const API_KEY: string = import.meta.env.VITE_API_KEY;

export const fetchFeed = async () => {
  const data = fetch(
    `${URL}/everything?q=dominican+republic&republica+dominicana&apiKey=${API_KEY}`,
  ).then((res) => res.json()) as unknown as Feed;
  return await data;
};

export type FeedContext = ReturnType<typeof fetchFeed>;
