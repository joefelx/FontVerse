import { Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import { Header, Footer } from "./components";

function App() {
  return (
    <div className="h-full w-full bg-black">
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
