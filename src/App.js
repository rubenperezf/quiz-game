import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Contact from "./pages/Contact";
import Questions from "./pages/Questions";
import Ranking from "./pages/Ranking";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Contact />} />
        <Route path="about" element={<Questions />} />
        <Route path="dashboard" element={<Ranking />} />

        {/* Using path="*"" means "match anything", so this route
            acts like a catch-all for URLs that we don't have explicit
            routes for. */}
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
