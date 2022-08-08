import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/home/Home";
import Liked from "./pages/liked/Liked";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<Home />} />
        <Route path="/liked" element={<Liked />} />
      </Route>
    </Routes>
  );
}

export default App;
