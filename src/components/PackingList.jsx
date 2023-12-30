import { useEffect } from "react";
import { Item } from "./Item";

export const PackingList = ({
  initialItems,
  setInitialItems,
  handleSort,
  sortCategory,
  setSortCategory,
}) => {
  useEffect(() => {
    handleSort();
  }, [sortCategory]);

  const clearItems = () => {
    if (confirm("Are you sure you want to delete all items?")) {
      setInitialItems([]);
    }
  };

  const listedItems = initialItems.map((item) => {
    const props = {
      ...item,
      initialItems,
      setInitialItems,
      handleSort,
    };

    return <Item key={item.id} {...props} />;
  });

  return (
    <div className="list">
      <ul>{listedItems}</ul>

      <div className="actions">
        <select
          value={sortCategory}
          onChange={(e) => setSortCategory(e.target.value)}
        >
          <option value={"input"}>sort by input order</option>
          <option value={"description"}>sort by description</option>
          <option value={"packedStatus"}>sort by packed Status</option>
        </select>

        <button onClick={clearItems}>Clear List</button>
      </div>
    </div>
  );
};
