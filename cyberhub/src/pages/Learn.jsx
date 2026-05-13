import { useState } from "react";
import { starterResources } from "../data/starterResources";
import ResourceCard from "../components/ResourceCard";

function Learn() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredResources = starterResources.filter((resource) => {
    const searchText = `${resource.title} ${resource.category} ${resource.summary} ${resource.tags.join(" ")}`;
    return searchText.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <section className="page">
      <h1>Learn</h1>
      <p>Search and explore cybersecurity topics.</p>

      <label htmlFor="resource-search">Search topics</label>
      <input
        id="resource-search"
        type="search"
        placeholder="Search for XSS, Nmap, Linux..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />

      <div className="card-grid">
        {filteredResources.map((resource) => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
      </div>
    </section>
  );
}

export default Learn;