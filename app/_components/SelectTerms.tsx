const SelectTerms = ({ invoiceTerms }) => {
  console.log("invoiceTerms: ", invoiceTerms);
  return (
    <div className="flex flex-col items-stretch justify-start space-y-2.5 md:col-start-2 md:col-end-3">
      <label htmlFor="select-terms" className="text-xs text-wild-blue-yonder">
        Payment Terms
      </label>

      <select
        id="select-terms"
        name="select-terms"
        className="w-full rounded border border-link-water px-5 py-[15px] text-xs font-bold focus:border-purple-mimosa md:py-[17px] md:text-base"
        defaultValue={invoiceTerms}
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
