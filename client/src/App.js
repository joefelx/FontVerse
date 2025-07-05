import { Routes, Route } from "react-router-dom";
import { Home, Font, DashBoard } from "./pages";
import { Header, Footer } from "./components";
import { Toaster } from "react-hot-toast";
import Auth from "./pages/Auth";
import { UserProvider } from "./context/UserContext";

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
      <UserProvider>
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
            <Route path="/auth" element={<Auth />} />
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
      </UserProvider>
    </div>
  );
}

export default App;
