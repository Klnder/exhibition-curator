import React from "react";

function Modal({ artwork, setArtworkClick }) {
  function handleClick() {
    setArtworkClick("");
  }

  return (
    <>
      <dialog id="artwork_modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={handleClick}>
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">{artwork.title}</h3>
          <p className="py-4">{artwork.body}</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={handleClick}>close</button>
        </form>
      </dialog>
    </>
  );
}

export default Modal;
