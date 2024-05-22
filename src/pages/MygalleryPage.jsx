import React, { useContext } from "react";
import { UserContext } from "../context/User";
import ArtworkElement from "../components/ArtworkElement";

function MygalleryPage() {
  const { user } = useContext(UserContext);

  return (
    <div className="w-4/5 mx-auto h-full bg-base-200 rounded-lg p-2 overflow-y-auto min-w-[700px] flex">
      {user.mygallery.map((artwork) => (
        <ArtworkElement artwork={artwork} />
      ))}
    </div>
  );
}

export default MygalleryPage;
