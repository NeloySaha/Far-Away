import { useEffect, useState } from "react";
import "./index.css";
import { Logo } from "./components/Logo";
import { Form } from "./components/Form";
import { PackingList } from "./components/PackingList";
import { Stats } from "./components/Stats";

function App() {
  const [initialItems, setInitialItems] = useState(
    JSON.parse(localStorage.getItem("items")) || []
  );

  const [sortCategory, setSortCategory] = useState("input");

  const handleSort = () => {
    if (sortCategory === "input") {
      setInitialItems((prev) => [...prev.sort((a, b) => a.id - b.id)]);
    }

    if (sortCategory === "description") {
      setInitialItems((prev) => {
        const sortedArr = prev.sort((a, b) => {
          const descriptionA = a.description.toUpperCase();
          const descriptionB = b.description.toUpperCase();

          if (descriptionA < descriptionB) {
            return -1;
          }
          if (descriptionA > descriptionB) {
            return 1;
          }

          return 0;
        });

        return [...sortedArr];
      });
    }

    if (sortCategory === "packedStatus") {
      setInitialItems((prev) => {
        const sortedArr = [...prev].sort((a, b) => {
          if (a.packed) return 1;
          if (b.packed) return -1;

          return 0;
        });

        return [...sortedArr];
      });
    }
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(initialItems));
  }, [initialItems]);

  const props = {
    initialItems,
    setInitialItems,
    handleSort,
    sortCategory,
    setSortCategory,
  };

  return (
    <section className="app">
      <Logo />
      <Form {...props} />
      <PackingList {...props} />
      <Stats {...props} />
    </section>
  );
}

export default App;
