import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Protected and Nested Route */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        >
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* Dynamic route */}
        <Route path="/blog/:id" element={<Blog />} />

        {/* Fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
