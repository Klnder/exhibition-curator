import { createContext, useState } from "react";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const initialFilters = {
    mygallery: false,
    sortBy: "ascendant",
    search: "",
    from: "All",
    type: "All",
  };

  const [filters, setFilters] = useState(() => {
    const savedFilters = localStorage.getItem("filters");
    return savedFilters ? JSON.parse(savedFilters) : initialFilters;
  });

  return <FilterContext.Provider value={{ filters, setFilters }}>{children}</FilterContext.Provider>;
};
