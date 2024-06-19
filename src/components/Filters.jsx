import { useContext } from "react";
import SearchBar from "../components/SearchBar";
import { FilterContext } from "../context/Filter";
import { UserContext } from "../context/User";
import { toast } from "react-toastify";

function Filters({ types }) {
  const { filters, setFilters } = useContext(FilterContext);
  const { setUser } = useContext(UserContext);

  function handleYesClick() {
    setFilters({
      mygallery: false,
      sortBy: "ascendant",
      search: "",
      from: "All",
      type: "All",
    });

    setUser((prevUser) => ({
      ...prevUser,
      mygallery: [],
    }));

    document.getElementById("reset_modal").close();
    toast.success("Filters and gallery reset !");
  }

  function handleNoClick() {
    document.getElementById("reset_modal").close();
  }

  return (
    <div className="flex-col relative">
      <SearchBar />
      <div className="w-36 absolute top-0 right-0">
        <label className="cursor-pointer label">
          <span className="label-text">My gallerie</span>
          <input
            type="checkbox"
            className="toggle toggle-primary"
            checked={filters.mygallery}
            onChange={(event) =>
              setFilters((prevFilters) => ({
                ...prevFilters,
                mygallery: event.target.checked,
              }))
            }
          />
        </label>
        <button className="btn btn-active btn-primary w-36 mt-4" onClick={() => document.getElementById("reset_modal").showModal()}>
          Reset All
        </button>
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
          <form className="my-3 flex items-center">
            <label htmlFor="source" className="mr-3 w-32 text-left whitespace-nowrap">
              Type:
            </label>
            <select
              name="source"
              className="select select-bordered select-sm w-full"
              value={filters.type}
              onChange={(e) => setFilters({ ...filters, type: e.target.value })}
            >
              <option value="All">All</option>
              {types.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </form>
        </div>
      </div>
      <dialog id="reset_modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="font-bold text-lg">Are you sure you want to reset all ?</h3>
          <div className="modal-action justify-center">
            <button className="btn btn-success mx-2" onClick={handleYesClick}>
              Yes
            </button>
            <button className="btn btn-error mx-2" onClick={handleNoClick}>
              No
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Filters;
