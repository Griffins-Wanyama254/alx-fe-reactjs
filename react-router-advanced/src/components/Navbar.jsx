import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#222", color: "#fff" }}>
      <Link to="/" style={{ marginRight: "10px", color: "white" }}>
        Home
      </Link>
      <Link to="/about" style={{ marginRight: "10px", color: "white" }}>
        About
      </Link>
      <Link to="/profile" style={{ marginRight: "10px", color: "white" }}>
        Profile
      </Link>
      <Link to="/blog/1" style={{ color: "white" }}>
        Blog #1
      </Link>
    </nav>
  );
}

export default Navbar;
