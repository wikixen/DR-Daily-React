import {
  useQuery
} from "@tanstack/react-query";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { PiSpinner } from "react-icons/pi";
import Header from "../components/header";
import { NotFound } from "./-404";
import { Btn } from "../components/ui/btn";
import { useState } from "react";
import { Article } from "../model";

export const Route = createRootRoute({
  component: Layout,
  notFoundComponent: NotFound,
});

// const URL = "https://newsapi.org/v2";
const URL = "poop";
// const API_KEY: string = import.meta.env.VITE_API_KEY;
const API_KEY: string = "poop";

function Layout() {
  // const { isPending, error, data } = useQuery({
  //   queryKey: ["articles"],
  //   queryFn: () =>
  //     fetch(
  //       `${URL}/everything?q=dominican+republic&republica+dominicana&apiKey=${API_KEY}`,
  //     ).then((res) => res.json()),
  // });
  // const [searchResults, setSearchResults] = useState<Array<Article>>([]);
  

  // if (isPending) {
  //   return (
  //     <section className="flex h-screen items-center justify-center bg-navy">
  //       <PiSpinner className="size-[35px] animate-spin text-white" />
  //     </section>
  //   );
  // }
  // if (error) {
  //   return (
  //     <section className="flex flex-col h-screen items-center justify-center gap-2 bg-navy text-white">
  //       <p className="text-xl">Something went wrong try again.</p>
  //       <div>
  //         <Btn onClick={() => window.location.reload()}>
  //           Refresh
  //         </Btn>
  //       </div>
  //     </section>
  //   );
  // }
  return (
    <div className="flex flex-col px-16">
      <div>
        <Header />
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  );
};
