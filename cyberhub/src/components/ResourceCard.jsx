import { Link } from "react-router-dom";

function ResourceCard({ resource }) {
  return (
    <article className="card">
      <h2>{resource.title}</h2>

      <p className="meta">
        {resource.category} · {resource.difficulty}
      </p>

      <p>{resource.summary}</p>

      <ul className="tag-list">
        {resource.tags.map((tag) => (
          <li key={tag}>#{tag}</li>
        ))}
      </ul>

      <Link className="button" to={`/topics/${resource.id}`}>
        Read more
      </Link>
    </article>
  );
}

export default ResourceCard;