function GitHubRepoCard({ repo }) {
  return (
    <article className="card">
      <h2>{repo.name}</h2>

      <p className="meta">
        {repo.fullName}
      </p>

      <p>
        {repo.description || "No description provided."}
      </p>

      <ul className="repo-meta-list">
        <li>Stars: {repo.stars}</li>
        <li>Language: {repo.language || "Not specified"}</li>
        <li>Owner: {repo.owner}</li>
      </ul>

      <a
        className="button"
        href={repo.url}
        target="_blank"
        rel="noreferrer"
      >
        Open repository
      </a>
    </article>
  );
}

export default GitHubRepoCard;