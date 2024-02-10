import { Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import { Header, Footer } from "./components";
import useFont from "./hooks/useFont";
import { useEffect } from "react";

function App() {
  const { fetchAllFonts } = useFont();
  useEffect(() => {
    fetchAllFonts();
  }, []);

  return (
    <div className="min-h-screen w-full bg-lightwhite">
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
