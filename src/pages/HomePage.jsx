import React, { useContext, useEffect, useState } from "react";
import ArtworkElement from "../components/ArtworkElement";
import SearchBar from "../components/SearchBar";
import Modal from "../components/Modal";
import { UserContext } from "../context/User";
import { getArtworks } from "../utils/db";

function HomePage() {
  const { user, setUser } = useContext(UserContext);
  const [gallery, setGallery] = useState(user.gallery);
  const [sortBy, setSortBy] = useState("ascendant");
  //searchParams.get("sortBy") ||
  const [artworkClick, setArtworkClick] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const gallerySorted = [...gallery];
    if (sortBy === "ascendant") {
      gallerySorted.sort((a, b) => {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0;
      });
    } else {
      gallerySorted.sort((a, b) => {
        if (a.title < b.title) return 1;
        if (a.title > b.title) return -1;
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getArtworks();
        const updatedUser = { ...user };
        updatedUser.gallery = data.data;
        setUser(updatedUser);
        setGallery(updatedUser.gallery);
      } catch (error) {}
    };

    fetchData();
  }, []);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    if (event.target.checked) {
      setGallery(user.mygallery);
    } else {
      setGallery(user.gallery);
    }
  };

  return (
    <div className="w-4/5 mx-auto h-full bg-base-200 rounded-lg p-2 overflow-y-auto min-w-[700px] flex-col">
      <div className="flex-col relative">
        <SearchBar setGallery={setGallery} />
        <div className="w-36 absolute top-0 right-0">
          <label className="cursor-pointer label">
            <span className="label-text">My gallerie</span>
            <input type="checkbox" className="toggle toggle-primary" checked={isChecked} onChange={handleCheckboxChange} />
          </label>
        </div>
        <form className="my-3 w-full flex justify-center self-baseline">
          <label htmlFor="sortBy" className="mr-3">
            Sort By:
          </label>
          <select name="sortBy" className="select select-bordered select-sm w-full max-w-xs" onChange={(e) => setSortBy(e.target.value)}>
            <option value="ascendant">Alphabetical A-Z</option>
            <option value="descendant">Alphabetical Z-A</option>
          </select>
        </form>
      </div>

      <div className="flex flex-wrap">
        {gallery.map((artwork) => (
          <ArtworkElement artwork={artwork} setArtworkClick={setArtworkClick} key={artwork.id} />
        ))}
      </div>
      <Modal artwork={artworkClick} setArtworkClick={setArtworkClick} />
    </div>
  );
}

export default HomePage;
