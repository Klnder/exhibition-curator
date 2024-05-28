import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const sortedGallery = [
    {
      name: "hello",
      body: "this is a test",
      imgLink: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
      id: 1,
    },
    {
      name: "test",
      body: "this is a test",
      imgLink: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
      id: 2,
    },
    {
      name: "jeremy",
      body: "this is a test",
      imgLink: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
      id: 3,
    },
  ].sort((a, b) => a.name.localeCompare(b.name));

  const [user, setUser] = useState({
    gallery: sortedGallery,
    mygallery: [],
  });

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};
