const FormSubmitButtons = () => {
  return (
    <div className="w-full bg-white px-6 py-5 shadow-[5px_-25px_41px_10px_#e2e8f0] md:px-14 md:py-8 md:shadow-none dark:bg-dark dark:shadow-none">
      <div className="flex w-full flex-row justify-end space-x-2">
        <button className="rounded-3xl bg-alabaster p-4 text-xs font-bold text-wild-blue-yonder hover:bg-link-water dark:bg-ebony-clay dark:text-link-water">
          Discard
        </button>
        <button
          className="rounded-3xl bg-medium-slate-blue p-4 text-xs font-bold text-white hover:bg-purple-mimosa dark:bg-medium-slate-blue dark:text-link-water"
          type="submit"
        >
          Save & Send
        </button>
      </div>
    </div>
  );
};

export default FormSubmitButtons;
