import React from "react";

export const Stats = ({ initialItems }) => {
  const packedItems = initialItems.reduce(
    (acc, item) => (item.packed ? 1 + acc : 0 + acc),
    0
  );

  const percentage =
    initialItems.length === 0
      ? 0
      : Math.round((packedItems / initialItems.length) * 100);

  return (
    <footer className="stats">
      <em>
        💼 You have {initialItems.length} items on your list, and you already
        packed {packedItems} ({percentage}%)
      </em>
    </footer>
  );
};
