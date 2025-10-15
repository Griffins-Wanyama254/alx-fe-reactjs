import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-center space-x-6">
      <Link to="/" className="hover:text-blue-400 transition">Home</Link>
      <Link to="/about" className="hover:text-blue-400 transition">About</Link>
      <Link to="/profile" className="hover:text-blue-400 transition">Profile</Link>
      <Link to="/blog/1" className="hover:text-blue-400 transition">Blog #1</Link>
    </nav>
  );
}

export default Navbar;
