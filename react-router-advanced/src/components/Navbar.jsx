import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/profile/settings">Profile Settings</Link>
      <Link to="/blog/1">Blog #1</Link>
    </nav>
  );
};

export default Navbar;
