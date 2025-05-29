import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import Login from "./pages/Login";
import BlogEditor from "./pages/BlogEditor";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/BlogEditor" element={<BlogEditor />} />{" "}
        {/* ✅ lowercase */}
      </Routes>
    </Router>
  );
}

export default App;
