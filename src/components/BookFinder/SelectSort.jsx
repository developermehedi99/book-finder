const SelectSort = ({ onDropDownChange }) => {
  const handleSortChange = (event) => {
    const selectedChangeOption = event.target.value;
    onDropDownChange(selectedChangeOption);
  };

  return (
    <div className="flex items-stretch space-x-3">
      <label htmlFor="sortBy" className="sr-only">
        Sort By
      </label>
      <select
        className="cursor-pointer  rounded-md border px-4 py-2 text-center text-gray-600"
        name="sortBy"
        onChange={handleSortChange}
        id="sortBy"
      >
        <option value="">Sort</option>
        <option value="name_asc">Name (A-Z)</option>
        <option value="name_desc">Name (Z-A)</option>
        <option value="year_asc">Publication Year (Oldest)</option>
        <option value="year_desc">Publication Year (Newest)</option>
      </select>
    </div>
  );
};

export default SelectSort;
