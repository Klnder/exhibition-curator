import React, { useState } from "react";
import ArtworkElement from "../components/ArtworkElement";

function HomePage() {
  const [gallery, setGallery] = useState([
    {
      name: "test",
      body: "this is a test",
      imgLink: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    },
    {
      name: "test",
      body: "this is a test",
      imgLink: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    },
    {
      name: "test",
      body: "this is a test",
      imgLink: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    },
  ]);

  return (
    <div className="w-4/5 mx-auto h-full bg-base-200 rounded-lg p-2 overflow-y-auto min-w-[700px] flex">
      {gallery.map((artwork) => (
        <ArtworkElement artwork={artwork} />
      ))}
    </div>
  );
}

export default HomePage;
