import React, { useEffect, useState } from "react";
import ArtworkElement from "../components/ArtworkElement";
import SearchBar from "../components/SearchBar";
import Modal from "../components/Modal";

function HomePage() {
  const [gallery, setGallery] = useState([
    {
      name: "hello",
      body: "this is a test",
      imgLink: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    },
    {
      name: "test",
      body: "this is a test",
      imgLink: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    },
    {
      name: "jeremy",
      body: "this is a test",
      imgLink: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    },
  ]);
  const [filteredArtworks, setFilteredArtworks] = useState(gallery);
  const [sortBy, setSortBy] = useState("ascendant");
  //searchParams.get("sortBy") ||
  const [artworkClick, setArtworkClick] = useState("");

  useEffect(() => {
    const gallerySorted = gallery;
    if (sortBy === "descendant") {
      gallerySorted.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });
    } else {
      gallerySorted.sort((a, b) => {
        if (a.name < b.name) return 1;
        if (a.name > b.name) return -1;
        return 0;
      });
    }
    setGallery(gallerySorted);
  }, [sortBy]);
  useEffect(() => {
    if (artworkClick !== "") {
      const modal = document.getElementById("artwork_modal");
      modal?.showModal();
    }
  }, [artworkClick]);

  return (
    <div className="w-4/5 mx-auto h-full bg-base-200 rounded-lg p-2 overflow-y-auto min-w-[700px] flex-col">
      <SearchBar setFilteredArtworks={setFilteredArtworks} gallery={gallery} />
      <form action="" className="my-3 w-full flex justify-center self-baseline">
        <label htmlFor="sortBy" className="mr-3">
          Sort By:
        </label>
        <select name="sortBy" className="select select-bordered select-sm w-full max-w-xs" onChange={(e) => setSortBy(e.target.value)}>
          <option value="ascendant">Alphabetical A-Z</option>
          <option value="descendant">Alphabetical Z-A</option>
        </select>
      </form>
      <div className="flex flex-wrap">
        {filteredArtworks.map((artwork, index) => (
          <ArtworkElement artwork={artwork} setArtworkClick={setArtworkClick} key={index} />
        ))}
      </div>
      <Modal artwork={artworkClick} setArtworkClick={setArtworkClick} />
    </div>
  );
}

export default HomePage;
