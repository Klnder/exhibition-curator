import { useContext, useState } from "react";
import SearchBar from "../components/SearchBar";
import { FilterContext } from "../context/Filter";

function Filters() {
  const [isChecked, setIsChecked] = useState(false);
  const { filters, setFilters } = useContext(FilterContext);

  function handleCheckboxChange(event) {
    const isChecked = event.target.checked;
    setIsChecked(isChecked);
    setFilters({ ...filters, mygallery: isChecked });
  }

  return (
    <div className="flex-col relative">
      <SearchBar />
      <div className="w-36 absolute top-0 right-0">
        <label className="cursor-pointer label">
          <span className="label-text">My gallerie</span>
          <input type="checkbox" className="toggle toggle-primary" checked={isChecked} onChange={handleCheckboxChange} />
        </label>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-full max-w-xs">
          <form className="my-3 flex items-center">
            <label htmlFor="sortBy" className="mr-3 w-32 text-left">
              Sort By:
            </label>
            <select
              name="sortBy"
              className="select select-bordered select-sm w-full"
              value={filters.sortBy}
              onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
            >
              <option value="ascendant">Alphabetical A-Z</option>
              <option value="descendant">Alphabetical Z-A</option>
            </select>
          </form>
          <form className="my-3 flex items-center">
            <label htmlFor="source" className="mr-3 w-32 text-left whitespace-nowrap">
              From:
            </label>
            <select
              name="source"
              className="select select-bordered select-sm w-full"
              value={filters.from}
              onChange={(e) => setFilters({ ...filters, from: e.target.value })}
            >
              <option value="All">All</option>
              <option value="Cleveland">Cleveland</option>
              <option value="Chicago">Chicago</option>
            </select>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Filters;
