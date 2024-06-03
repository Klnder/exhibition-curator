import React from "react";
import Button from "./Button";

function ArtworkElement({ artwork, setArtworkClick }) {
  function handleClick() {
    setArtworkClick(artwork);
  }
  return (
    <div className="card card-compact min-w-[250px] w-[20%] bg-base-100 m-3 hover:scale-105 hover:shadow-md hover:shadow-secondary hover:cursor-pointer flex flex-col justify-between">
      <div onClick={handleClick} className="flex-grow">
        <figure className="rounded-md">
          <img src={artwork.images.web.url} alt="Shoes" className="w-48 h-48 rounded-md object-fill" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-md">{artwork.title.length > 40 ? `${artwork.title.slice(0, 40)}...` : artwork.title}</h2>
        </div>
      </div>
      <div className="card-actions justify-between items-baseline mt-auto">
        <div className="badge badge-primary badge-outline ml-2">{artwork.type}</div>
        <Button artwork={artwork} />
      </div>
    </div>
  );
}

export default ArtworkElement;
