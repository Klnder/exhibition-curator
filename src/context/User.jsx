import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    galleryCleveland: [],
    galleryChicago: [],
    mygallery: [],
  });

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};
