const GITHUB_SEARCH_URL = "https://api.github.com/search/repositories";

export async function searchGitHubRepos(searchTerm) {
  if (!searchTerm || searchTerm.trim() === "") {
    return [];
  }

  const query = encodeURIComponent(`${searchTerm} cybersecurity learning`);

  const url = `${GITHUB_SEARCH_URL}?q=${query}&sort=stars&order=desc&per_page=10`;

  const response = await fetch(url, {
    headers: {
      Accept: "application/vnd.github+json",
    },
  });

  if (!response.ok) {
    throw new Error("GitHub search failed. Try again later.");
  }

  const data = await response.json();

  return data.items.map((repo) => ({
    id: repo.id,
    name: repo.name,
    fullName: repo.full_name,
    description: repo.description,
    url: repo.html_url,
    stars: repo.stargazers_count,
    language: repo.language,
    owner: repo.owner?.login,
    updatedAt: repo.updated_at,
  }));
}