import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/User";

function Button({ artwork }) {
  const { user, setUser } = useContext(UserContext);
  const [inGallery, setInGallery] = useState(false);

  function addToGallery() {
    const updatedUser = { ...user };
    updatedUser.mygallery.push(artwork);
    setUser(updatedUser);
  }

  function removeFromGallery() {
    const updatedUser = { ...user };
    const index = updatedUser.mygallery.indexOf(artwork);
    if (index !== -1) {
      updatedUser.mygallery.splice(index, 1);
    }
    setUser(updatedUser);
  }

  useEffect(() => {
    setInGallery(false);
    if (user.mygallery.includes(artwork)) {
      setInGallery(true);
    }
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
