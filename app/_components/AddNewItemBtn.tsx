"use client";

const AddNewItemBtn = ({ addNewItem }) => {
  return (
    <button onClick={addNewItem} className="mb-20" type="button">
      + Add New Item
    </button>
  );
};

export default AddNewItemBtn;
