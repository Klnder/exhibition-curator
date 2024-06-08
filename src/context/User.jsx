import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const initialUser = {
    galleryCleveland: [],
    galleryChicago: [],
    mygallery: [],
  };

  const [user, setUser] = useState(() => {
    const savedMyGallery = localStorage.getItem("user.mygallery");
    return savedMyGallery ? { ...initialUser, mygallery: JSON.parse(savedMyGallery) } : initialUser;
  });

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};
