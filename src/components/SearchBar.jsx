import { useState } from "react";

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

  return (
    <div className="form-control w-full items-center relative">
      <input
        type="text"
        placeholder="Search a artwork"
        className="input input-bordered border-4 input-md w-1/2 text-center"
        onChange={handleSearchChange}
        value={searchQuery}
      />
    </div>
  );
}

export default SearchBar;
