import React from "react";
import Button from "./Button";

function ArtworkElement({ artwork }) {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl m-2">
      <figure>
        <img src={artwork.imgLink} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{artwork.title}</h2>
        <p>{artwork.body}</p>
        <div className="card-actions justify-end">
          <Button artwork={artwork} />
        </div>
      </div>
    </div>
  );
}

export default ArtworkElement;
