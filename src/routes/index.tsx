import { createFileRoute } from "@tanstack/react-router";
import { PageTitle } from "../components/pageTitle";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  
  return (
    <div>
      <PageTitle
        title={"Latest News"}
        subtitle={"Stay updated with the latest news from the Dominican Republic"}
      />
    </div>
  );
}
