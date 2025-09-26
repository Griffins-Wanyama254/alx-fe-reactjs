import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import { searchUsers } from "./services/githubService";

function App() {
  const [users, setUsers] = useState([]);

  const handleSearch = async (username) => {
    const results = await searchUsers(username);
    setUsers(results);
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />
      <div>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default App;
