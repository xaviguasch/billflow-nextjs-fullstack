"use client";

const AddNewItemBtn = ({ addNewItem }) => {
  return (
    <button
      onClick={addNewItem}
      className="mb-12 mt-6 h-12 rounded-3xl bg-alabaster text-wild-blue-yonder hover:bg-link-water md:mb-0 md:mt-0 md:text-base dark:bg-ebony-clay dark:text-regent-gray"
      type="button"
    >
      + Add New Item
    </button>
  );
};

export default AddNewItemBtn;
