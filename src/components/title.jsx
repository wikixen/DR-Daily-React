export const Title = ({ title, subtitle }) => (
  <section className="flex flex-col py-4 gap-2">
    <h1 className="text-3xl font-bold dark:text-white">{title}</h1>
    <h2 className="text-lg text-gray-500">{subtitle}</h2>
  </section>
);
