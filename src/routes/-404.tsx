import { Link } from "@tanstack/react-router";
import { Btn } from "../components/ui/btn";

export const NotFound = () => (
  <section className="flex flex-col gap-4 justify-center items-center min-h-screen dark:bg-[#0f172a]">
    <h1 className="flex items-center gap-2 text-xl">
      <span className="font-semibold text-2xl">¡Epa!</span>
      <span>you seem to have wandered off the beaten path</span>
    </h1>
    <div>
      <Btn>
        <Link to="/">
          Return to Home
        </Link>
      </Btn>
    </div>
  </section>
);
