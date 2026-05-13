import { useParams, Link } from "react-router-dom";
import { starterResources } from "../data/starterResources";

function TopicDetails() {
  const { id } = useParams();

  const resource = starterResources.find((item) => item.id === id);

  if (!resource) {
    return (
      <section className="page">
        <h1>Topic not found</h1>
        <Link to="/learn">Back to learning topics</Link>
      </section>
    );
  }

  return (
    <section className="page">
      <h1>{resource.title}</h1>
      <p className="badge">{resource.difficulty}</p>
      <p>{resource.content}</p>

      <h2>Tags</h2>
      <ul className="tag-list">
        {resource.tags.map((tag) => (
          <li key={tag}>#{tag}</li>
        ))}
      </ul>

      <Link to="/learn">Back to Learn</Link>
    </section>
  );
}

export default TopicDetails;