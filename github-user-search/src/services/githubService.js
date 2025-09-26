import axios from "axios";

const GITHUB_API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

export const searchUsers = async ({ username, location, minRepos }) => {
  // Construct GitHub search query
  let query = username || "";
  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>=${minRepos}`;

  const response = await axios.get(`https://api.github.com/search/users?q=${query}`, {
    headers: {
      Authorization: `token ${GITHUB_API_KEY}`,
    },
  });

  return response.data.items;
};
