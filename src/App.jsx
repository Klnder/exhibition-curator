import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MygalleryPage from "./pages/MygalleryPage";
import ErrorPage from "./pages/ErrorPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="mt-32 min-h-[70vh] overflow-auto box-border mb-16">
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="mygallerie" element={<MygalleryPage />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
