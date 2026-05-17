import { useEffect, useState } from "react";
import { starterResources } from "../data/starterResources";
import { categories } from "../data/categories";
import ResourceCard from "../components/ResourceCard";
import { useAuth } from "../context/AuthContext";
import { getUserFavorites } from "../firebase/firestoreService";

function Learn() {
  const { currentUser } = useAuth();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [isLoadingFavorites, setIsLoadingFavorites] = useState(false);

  const difficulties = ["All", "Beginner", "Intermediate", "Advanced"];

  useEffect(() => {
    async function loadFavoriteIds() {
      if (!currentUser) {
        setFavoriteIds([]);
        return;
      }

      setIsLoadingFavorites(true);

      try {
        const ids = await getUserFavorites(currentUser.uid);
        setFavoriteIds(ids);
      } catch (error) {
        console.error("Could not load favorites:", error);
      } finally {
        setIsLoadingFavorites(false);
      }
    }

    loadFavoriteIds();
  }, [currentUser]);

  const filteredResources = starterResources.filter((resource) => {
    const searchText = `${resource.title} ${resource.category} ${
      resource.summary
    } ${resource.tags.join(" ")}`;

    const matchesSearch = searchText
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || resource.category === selectedCategory;

    const matchesDifficulty =
      selectedDifficulty === "All" ||
      resource.difficulty === selectedDifficulty;

    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  function resetFilters() {
    setSearchTerm("");
    setSelectedCategory("All");
    setSelectedDifficulty("All");
  }

  function handleFavoriteChange(resourceId, isNowFavorite) {
    if (isNowFavorite) {
      setFavoriteIds((currentIds) => {
        if (currentIds.includes(resourceId)) {
          return currentIds;
        }

        return [...currentIds, resourceId];
      });
    } else {
      setFavoriteIds((currentIds) =>
        currentIds.filter((id) => id !== resourceId)
      );
    }
  }

  return (
    <section className="page">
      <h1>Learn Cybersecurity</h1>
      <p>
        Search and filter beginner-friendly cybersecurity topics, tools, and
        defensive concepts.
      </p>

      <div className="filters" aria-label="Learning topic filters">
        <div className="form-group">
          <label htmlFor="resource-search">Search topics</label>
          <input
            id="resource-search"
            type="search"
            placeholder="Search for XSS, Nmap, Linux..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="category-filter">Category</label>
          <select
            id="category-filter"
            value={selectedCategory}
            onChange={(event) => setSelectedCategory(event.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="difficulty-filter">Difficulty</label>
          <select
            id="difficulty-filter"
            value={selectedDifficulty}
            onChange={(event) => setSelectedDifficulty(event.target.value)}
          >
            {difficulties.map((difficulty) => (
              <option key={difficulty} value={difficulty}>
                {difficulty}
              </option>
            ))}
          </select>
        </div>

        <button className="button secondary-button" onClick={resetFilters}>
          Reset filters
        </button>
      </div>

      <p className="result-count">
        Showing {filteredResources.length} of {starterResources.length} topics.
      </p>

      {isLoadingFavorites && currentUser && (
        <p className="small-status">Checking saved favorites...</p>
      )}

      {filteredResources.length === 0 ? (
        <div className="empty-state">
          <h2>No topics found</h2>
          <p>Try changing your search term, category, or difficulty filter.</p>
        </div>
      ) : (
        <div className="card-grid">
          {filteredResources.map((resource) => (
            <ResourceCard
              key={resource.id}
              resource={resource}
              isFavorite={favoriteIds.includes(resource.id)}
              onFavoriteChange={handleFavoriteChange}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Learn;