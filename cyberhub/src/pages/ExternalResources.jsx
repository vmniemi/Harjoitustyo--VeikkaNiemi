import { useState } from "react";
import { searchGitHubRepos } from "../services/githubApi";
import GitHubRepoCard from "../components/GitHubRepoCard";

function ExternalResources() {
  const [searchTerm, setSearchTerm] = useState("web security beginner");
  const [repos, setRepos] = useState([]);
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSearch(event) {
    event.preventDefault();

    setStatus("loading");
    setErrorMessage("");

    try {
      const results = await searchGitHubRepos(searchTerm);
      setRepos(results);
      setStatus("success");
    } catch (error) {
      setRepos([]);
      setStatus("error");
      setErrorMessage(error.message);
    }
  }

  return (
    <section className="page">
      <h1>External Resources</h1>

      <p>
        Search public GitHub repositories for cybersecurity learning resources.
        Results are fetched from the GitHub REST API.
      </p>

      <form className="search-panel" onSubmit={handleSearch}>
        <div className="form-group">
          <label htmlFor="github-search">Search GitHub repositories</label>
          <input
            id="github-search"
            type="search"
            value={searchTerm}
            placeholder="Example: web security beginner"
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>

        <button className="button" type="submit">
          Search GitHub
        </button>
      </form>

      {status === "loading" && <p>Loading GitHub repositories...</p>}

      {status === "error" && (
        <div className="error-box" role="alert">
          <p>{errorMessage}</p>
        </div>
      )}

      {status === "success" && repos.length === 0 && (
        <div className="empty-state">
          <h2>No repositories found</h2>
          <p>Try a different search term.</p>
        </div>
      )}

      {repos.length > 0 && (
        <>
          <p className="result-count">Showing {repos.length} repositories.</p>

          <div className="card-grid">
            {repos.map((repo) => (
              <GitHubRepoCard key={repo.id} repo={repo} />
            ))}
          </div>
        </>
      )}
    </section>
  );
}

export default ExternalResources;