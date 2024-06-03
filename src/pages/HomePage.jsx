import { useContext, useEffect, useState } from "react";
import ReactLoading from "react-loading";
import ArtworkElement from "../components/ArtworkElement";
import SearchBar from "../components/SearchBar";
import Modal from "../components/Modal";
import { UserContext } from "../context/User";
import { getArtworks } from "../utils/db";
import { FilterContext } from "../context/Filter";
import { filterGallery } from "../utils/utils";

function HomePage() {
  const { user, setUser } = useContext(UserContext);
  const { filters, setFilters } = useContext(FilterContext);
  const [gallery, setGallery] = useState(user.gallery);
  //searchParams.get("sortBy") ||
  const [artworkClick, setArtworkClick] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchData() {
    try {
      const data = await getArtworks();
      const updatedUser = { ...user, gallery: data };
      setUser(updatedUser);
      const galleryFilter = filterGallery(filters, updatedUser);
      setGallery(galleryFilter);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching artworks:", error);
    }
  }
  function handleCheckboxChange(event) {
    const isChecked = event.target.checked;
    setIsChecked(isChecked);
    setFilters({ ...filters, mygallery: isChecked });
  }

  useEffect(() => {
    if (artworkClick !== "") {
      const modal = document.getElementById("artwork_modal");
      modal?.showModal();
    }
  }, [artworkClick]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const galleryFilter = filterGallery(filters, user);
    setGallery(galleryFilter);
  }, [filters]);

  return (
    <>
      <div className="w-4/5 mx-auto h-full bg-base-200 rounded-lg p-2 overflow-y-auto min-w-[700px] flex-col">
        <div className="flex-col relative">
          <SearchBar />
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
            <select
              name="sortBy"
              className="select select-bordered select-sm w-full max-w-xs"
              onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
            >
              <option value="ascendant">Alphabetical A-Z</option>
              <option value="descendant">Alphabetical Z-A</option>
            </select>
          </form>
        </div>

        {isLoading && (
          <div className="flex flex-col items-center">
            <ReactLoading type="spin" color="#fff" height={"25%"} width={"25%"} className="p-5" />
            <h1>Data are loading, please wait !</h1>
          </div>
        )}

        {!isLoading && (
          <div className="flex flex-wrap justify-center">
            {gallery.map((artwork) => (
              <ArtworkElement artwork={artwork} setArtworkClick={setArtworkClick} key={artwork.id} />
            ))}
          </div>
        )}
      </div>
      <Modal artwork={artworkClick} setArtworkClick={setArtworkClick} />
    </>
  );
}

export default HomePage;
