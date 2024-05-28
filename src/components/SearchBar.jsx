import { useContext, useState } from "react";
import { UserContext } from "../context/User";

function SearchBar({ setFilteredArtworks, gallery }) {
  const [searchQuery, setSearchQuery] = useState("");

  function handleSearchChange(event) {
    setSearchQuery(event.target.value);
    if (event.target.value === "") {
      setFilteredArtworks(gallery);
    } else {
      setFilteredArtworks(filterArtworks(event.target.value));
    }
  }
  function filterArtworks(query) {
    return gallery.filter((artwork) => artwork.name.toLowerCase().includes(query.toLowerCase()));
  }
  const [isChecked, setIsChecked] = useState(false);
  const { user } = useContext(UserContext);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    if (event.target.checked) {
      setFilteredArtworks(user.mygallery);
    } else {
      setFilteredArtworks(gallery);
    }
  };

  return (
    <div className="w-full mx-auto flex justify-center items-center relative">
      <div className="flex justify-center w-full">
        <input
          type="text"
          placeholder="Search a artwork"
          className="input input-bordered border-4 input-md w-1/2 text-center"
          onChange={handleSearchChange}
          value={searchQuery}
        />
      </div>
      <div className="absolute right-0 w-36">
        <label className="cursor-pointer label">
          <span className="label-text">My gallerie</span>
          <input type="checkbox" className="toggle toggle-primary" checked={isChecked} onChange={handleCheckboxChange} />
        </label>
      </div>
    </div>
  );
}

export default SearchBar;
