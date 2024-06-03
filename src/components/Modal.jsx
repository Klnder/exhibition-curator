import React from "react";

function Modal({ artwork, setArtworkClick }) {
  return (
    <dialog id="artwork_modal" className="modal">
      <div className="modal-box w-10/12 max-w-5xl">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 mb-4" onClick={() => setArtworkClick("")}>
            ✕
          </button>
        </form>
        <div className="flex ">
          <div className="flex justify-center items-center flex-1">
            <img src={artwork.images?.web.url} alt="Image" className="w-4/5 rounded-md h-auto" />
          </div>
          <div className="flex flex-col justify-start items-start flex-1 p-2">
            <p>
              <span className="font-bold underline">Title:</span> <span className="italic text-sm">{artwork.title}</span>
            </p>
            <p>
              <span className="font-bold underline">Description:</span> <span className="italic text-sm">{artwork.tombstone}</span>
            </p>
            <p>
              <span className="font-bold underline">Creation date:</span> <span className="italic text-sm">{artwork.creation_date}</span>
            </p>
            <p>
              <span className="font-bold underline">Collection:</span> <span className="italic text-sm">{artwork.collection}</span>
            </p>
            <p>
              <span className="font-bold underline">Available at:</span> <span className="italic text-sm">{artwork.current_location}</span>
            </p>
            <p>
              <span className="font-bold underline">Link:</span>{" "}
              <a href={artwork.url} target="_blank" className="italic text-sm underline">
                {artwork.url}
              </a>
            </p>
          </div>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}

export default Modal;
