export const Item = ({
  id,
  description,
  quantity,
  packed,
  handleSort,
  setInitialItems,
}) => {
  const handleChange = () => {
    setInitialItems((prev) => {
      const newItemsArr = prev.map((arrItem) => {
        return arrItem.id === id
          ? {
              ...arrItem,
              packed: !packed,
            }
          : arrItem;
      });

      return newItemsArr;
    });

    handleSort();
  };

  const handleRemoveItem = () => {
    setInitialItems((prev) => {
      const newItemsArr = prev.filter((arrItem) => {
        return arrItem.id !== id;
      });

      return newItemsArr;
    });

    handleSort();
  };

  return (
    <li>
      <input
        type="checkbox"
        id={id}
        name={id}
        value={id}
        checked={packed}
        onChange={handleChange}
      />
      <label htmlFor={id}>
        <span style={packed ? { textDecoration: "line-through" } : {}}>
          {quantity} {description}
        </span>
      </label>
      <button onClick={handleRemoveItem}>❌</button>
    </li>
  );
};
