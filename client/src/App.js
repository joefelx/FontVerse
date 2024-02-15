import { Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import { Header, Footer } from "./components";
import { Toaster } from "react-hot-toast"

function App() {
  return (
    <div className="h-full w-full home">
      <Toaster />
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
