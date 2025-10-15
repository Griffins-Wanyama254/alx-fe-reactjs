import { Outlet, Link } from "react-router-dom";

function Profile() {
  return (
    <div className="p-4">
      <h1>Profile Page</h1>
      <nav>
        <Link to="settings">Go to Settings</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Profile;
