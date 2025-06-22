import { PiSpinner } from "react-icons/pi";

export const IsPending = () => (
  <section className="flex h-screen items-center justify-center bg-navy">
    <PiSpinner className="size-[35px] animate-spin text-white" />
  </section>
);
