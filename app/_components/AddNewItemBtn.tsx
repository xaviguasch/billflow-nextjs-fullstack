"use client";

const AddNewItemBtn = ({ addNewItem }) => {
  return (
    <button
      onClick={addNewItem}
      className="mb-20 mt-6 h-12 rounded-3xl bg-alabaster text-wild-blue-yonder hover:bg-link-water"
      type="button"
    >
      + Add New Item
    </button>
  );
};

export default AddNewItemBtn;
