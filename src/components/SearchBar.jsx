import { useContext } from "react";
import { FilterContext } from "../context/Filter";

function SearchBar() {
  const { filters, setFilters } = useContext(FilterContext);

  return (
    <div className="w-full mx-auto flex justify-center items-center relative">
      <div className="flex justify-center w-full">
        <input
          type="text"
          placeholder="Search an artwork"
          className="input input-bordered border-4 input-md w-1/2 text-center"
          onChange={(event) => setFilters({ ...filters, search: event.target.value })}
          value={filters.search}
        />
      </div>
    </div>
  );
}

export default SearchBar;
