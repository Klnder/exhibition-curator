import { useContext, useEffect, useState } from "react";
import ReactLoading from "react-loading";
import ArtworkElement from "../components/ArtworkElement";

import Modal from "../components/Modal";
import { UserContext } from "../context/User";
import { getArtworksArtInstituteOfChicago, getArtworksCleveland } from "../utils/db";
import { FilterContext } from "../context/Filter";
import { filterGallery, getUniqueGalleryTypes } from "../utils/utils";
import Filters from "../components/Filters";

function HomePage() {
  const { user, setUser } = useContext(UserContext);
  const { filters } = useContext(FilterContext);
  const [gallery, setGallery] = useState(user.gallery);
  const [artworkClick, setArtworkClick] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [types, setTypes] = useState([]);

async function fetchData() {
  try {
    const dataCleveland = await getArtworksCleveland();
    const dataChicago = await getArtworksArtInstituteOfChicago();

    console.log("Data from Cleveland:", dataCleveland);
    console.log("Data from Chicago:", dataChicago);

    const updatedUser = { ...user, galleryCleveland: dataCleveland, galleryChicago: dataChicago };
    const fullGallery = [...dataCleveland, ...dataChicago];

    setTypes(getUniqueGalleryTypes(fullGallery));
    setUser(updatedUser);

    console.log("Updated User:", updatedUser);
    console.log("Filters:", filters);

    const galleryFilter = filterGallery(filters, updatedUser);

    console.log("Filtered Gallery:", galleryFilter);

    setGallery(galleryFilter);
    setIsLoading(false);
  } catch (error) {
    console.error("Error fetching artworks:", error);
  }
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
    localStorage.setItem("user.mygallery", JSON.stringify(user.mygallery));
    localStorage.setItem("filters", JSON.stringify(filters));
  }, [filters, user]);

  return (
    <>
      <div className="w-4/5 mx-auto h-full bg-base-200 rounded-lg p-2 overflow-y-auto min-w-[700px] flex-col">
        <Filters types={types} />

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
