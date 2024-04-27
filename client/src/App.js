import { Routes, Route } from "react-router-dom";
import { Home, Font, DashBoard } from "./pages";
import { Header, Footer } from "./components";
import { Toaster } from "react-hot-toast";

function App() {
  const ParentContainer = ({ children }) => {
    return (
      <>
        <Header />
        {children}
        <Footer />
      </>
    );
  };

  return (
    <div className="h-full w-full home">
      <Toaster />
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <ParentContainer>
                <Home />
              </ParentContainer>
            }
          />
          <Route
            path="/font/:fontName"
            element={
              <ParentContainer>
                <Font />
              </ParentContainer>
            }
          />
          <Route path="/dashboard" element={<DashBoard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
