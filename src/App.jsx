import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Header />
      <main className="mt-24 min-h-[70vh] overflow-auto box-border mb-16">
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
