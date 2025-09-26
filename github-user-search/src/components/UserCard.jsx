import React from "react";

const UserCard = ({ user }) => (
  <div style={{ border: "1px solid #ccc", padding: "10px", marginTop: "10px" }}>
    <img src={user.avatar_url} alt={user.login} width="50" />
    <h3>{user.login}</h3>
    <a href={user.html_url} target="_blank" rel="noopener noreferrer">
      View GitHub Profile
    </a>
  </div>
);

export default UserCard;
