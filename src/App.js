import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Movies from "./pages/Movies/Movies";
import Navigation from "./components/Navigation";


function App() {

  return (
    <div>
      <Navigation />

      <Routes>
        <Route path="/trending-movies" element={<Home />} />
        <Route path="/movies-search" element={<Movies />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;