import React, { useState } from "react";
import { searchUsers } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setUsers([]);

    try {
      const results = await searchUsers({ username, location, minRepos });
      if (results.length === 0) {
        setError("Looks like we can't find the user");
      } else {
        setUsers(results);
      }
    } catch {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <form onSubmit={handleSearch} className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Minimum repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded"
        >
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {users.map((user) => (
        <div
          key={user.id}
          className="border p-2 mt-2 rounded flex items-center gap-2"
        >
          <img src={user.avatar_url} alt={user.login} width="50" />
          <div>
            <h3>{user.login}</h3>
            <p>{user.location || "Location unknown"}</p>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Profile
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Search;
