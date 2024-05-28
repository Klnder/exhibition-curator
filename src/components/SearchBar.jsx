import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/User";

function SearchBar({ setGallery }) {
  const [searchQuery, setSearchQuery] = useState("");
  const { user } = useContext(UserContext);

  function handleSearchChange(event) {
    setSearchQuery(event.target.value);
    if (event.target.value === "") {
      setGallery(user.gallery);
    } else {
      setGallery(filterArtworks(event.target.value));
    }
  }
  function filterArtworks(query) {
    return user.gallery.filter((artwork) => artwork.name.toLowerCase().includes(query.toLowerCase()));
  }

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
    </div>
  );
}

export default SearchBar;
