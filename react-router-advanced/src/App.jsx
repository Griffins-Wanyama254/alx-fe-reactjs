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
  const isAuthenticated = true;

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          }
        >
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
