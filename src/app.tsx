import { createRouter, RouterProvider } from "@tanstack/react-router";
import { fetchFeed } from "./api";
import { routeTree } from "./routeTree.gen";

const router = createRouter({
  routeTree,
  context: { feed: undefined! },
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  const feed = fetchFeed();
  return <RouterProvider router={router} context={{ feed }} />;
}
