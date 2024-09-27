const FormEditSaveChanges = () => {
  return (
    <div className="-mx-6 w-[115%] bg-white px-6 py-5 shadow-[5px_-25px_41px_10px_#e2e8f0]">
      <div className="flex w-full flex-row justify-end space-x-2">
        <button className="rounded-3xl bg-alabaster p-4 text-xs font-bold text-wild-blue-yonder">
          Cancel
        </button>
        <button
          className="rounded-3xl bg-medium-slate-blue p-4 text-xs font-bold text-white"
          type="submit"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default FormEditSaveChanges;