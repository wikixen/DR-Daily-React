import { Btn } from "../components/ui/btn";

export const IfError = () => (
  <section className="flex flex-col h-screen items-center justify-center gap-2 bg-navy text-white">
    <p className="text-xl">Something went wrong try again.</p>
    <div>
      <Btn onClick={() => window.location.reload()}>
        Refresh
      </Btn>
    </div>
  </section>
);
