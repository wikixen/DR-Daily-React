import { Link } from "react-router";
import { PrimaryBtn } from "../components/ui/primaryBtn";

export const NotFound = () => {
  return (
    <section className="flex flex-col gap-4 justify-center items-center min-h-screen dark:bg-[#0f172a]">
      <h1 className="flex items-center gap-2 text-xl">
        <span className="font-semibold text-2xl">¡Epa!</span>
        you seem to have wandered off the beaten path
      </h1>
      <div>
        <PrimaryBtn>
          <Link to="/">
            Return to Home
          </Link>
        </PrimaryBtn>
      </div>
    </section>
  );
};
