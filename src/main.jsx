import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/User.jsx";
import { FilterProvider } from "./context/Filter.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <UserProvider>
        <FilterProvider>
          <App />
        </FilterProvider>
      </UserProvider>
    </React.StrictMode>
  </BrowserRouter>
);
