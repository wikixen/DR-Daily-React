import { Home } from "./pages/home"
import { Header } from "./components/header"
import { useState } from "react";

export default function App() {
  const [theme, setTheme] = useState(false);

  return (
    <div className={`${theme ? "dark" : ""} `}>
      <main className="flex flex-col h-auto dark:bg-black dark:text-white transition-colors">
        <Header theme={theme} setTheme={setTheme} />
        <Home />
      </main>
    </div>
  );
}
