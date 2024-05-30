import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/User";
import { toast } from "react-toastify";

function Button({ artwork }) {
  const { user, setUser } = useContext(UserContext);
  const [inGallery, setInGallery] = useState(false);

  function addToGallery() {
    const updatedUser = { ...user };
    updatedUser.mygallery.push(artwork);
    setUser(updatedUser);
    toast.success("added to your gallerie !");
  }

  function removeFromGallery() {
    const updatedUser = { ...user };
    const index = updatedUser.mygallery.findIndex((item) => item.title === artwork.title);
    if (index !== -1) {
      updatedUser.mygallery.splice(index, 1);
    }
    setUser(updatedUser);
    toast.error("remove from your gallerie !");
  }

  useEffect(() => {
    const isInGallery = user.mygallery.find((item) => item.title === artwork.title);
    setInGallery(isInGallery);
  }, [user]);

  if (inGallery) {
    return (
      <button className="btn btn-error m-2" onClick={() => removeFromGallery()}>
        Remove
      </button>
    );
  } else {
    return (
      <button className="btn btn-success m-2" onClick={() => addToGallery()}>
        Add
      </button>
    );
  }
}

export default Button;
