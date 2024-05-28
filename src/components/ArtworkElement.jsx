import React from "react";
import Button from "./Button";

function ArtworkElement({ artwork, setArtworkClick }) {
  function handleClick() {
    setArtworkClick(artwork);
  }
  return (
    <div className="card card-compact w-72 bg-base-100 m-3 hover:scale-105 hover:shadow-md hover:shadow-secondary hover:cursor-pointer ">
      <div onClick={handleClick}>
        <figure className="rounded-md">
          <img src={artwork.imgLink} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{artwork.name}</h2>
          <p>{artwork.body}</p>
        </div>
      </div>

      <div className="card-actions justify-end">
        <Button artwork={artwork} />
      </div>
    </div>
  );
}

export default ArtworkElement;
