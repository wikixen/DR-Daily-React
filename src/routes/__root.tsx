import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { FeedContext } from "../api";
import Header from "../components/header";
import { IsPending } from "../components/isPending";
import { NotFound } from "./-404";
import { IfError } from "./-error";

type RouterContext = {
  feed: FeedContext;
};

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootLayout,
  notFoundComponent: NotFound,
  pendingComponent: IsPending,
  errorComponent: IfError,
  loader: ({ context }) => context.feed,
});

function RootLayout() {
  return (
    <div className="flex flex-col px-16">
      <Header />
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  );
}
