const SelectTerms = () => {
  return (
    <div className="flex flex-col items-stretch justify-start space-y-2.5">
      <label htmlFor="select-terms" className="text-xs text-wild-blue-yonder">
        Payment Terms
      </label>
      <select
        id="select-terms"
        name="select-terms"
        className="w-full rounded border border-link-water px-5 py-[14px] text-xs font-bold focus:border-purple-mimosa"
      >
        <option value="1">Next 1 Day</option>
        <option value="7">Next 7 Days</option>
        <option value="14">Next 14 Days</option>
        <option value="30">Next 30 days</option>
      </select>
    </div>
  );
};

export default SelectTerms;
