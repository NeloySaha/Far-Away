import { useState } from "react";

export const Form = ({ initialItems, setInitialItems, handleSort }) => {
  let optionArr = Array.from({ length: 20 }, (_, index) => index + 1);
  const [newFormData, setNewFormData] = useState({
    description: "",
    quantity: 1,
    packed: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNewFormData((prev) => ({
      ...prev,
      [name]: name === "quantity" ? +value : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setInitialItems((prev) => {
      const idArr = initialItems.map((item) => item.id);

      const currentMaxId = initialItems.length === 0 ? 0 : Math.max(...idArr);

      return [
        ...prev,
        {
          id: currentMaxId + 1,
          ...newFormData,
        },
      ];
    });

    setNewFormData({
      description: "",
      quantity: 1,
      packed: false,
    });

    handleSort();
  };

  const options = optionArr.map((option) => (
    <option key={option} value={option}>
      {option}
    </option>
  ));

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>

      <select
        name="quantity"
        value={newFormData.quantity}
        onChange={handleChange}
      >
        {options}
      </select>

      <input
        name="description"
        placeholder="Item..."
        value={newFormData.description}
        onChange={handleChange}
      />

      <button>ADD</button>
    </form>
  );
};
