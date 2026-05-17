import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { getUserFavorites } from "../firebase/firestoreService";
import { starterResources } from "../data/starterResources";
import ResourceCard from "../components/ResourceCard";

function Favorites() {
  const { currentUser } = useAuth();
  const [favoriteResources, setFavoriteResources] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    async function loadFavorites() {
      if (!currentUser) return;

      setStatus("loading");

      try {
        const favoriteIds = await getUserFavorites(currentUser.uid);

        const matchedResources = starterResources.filter((resource) =>
          favoriteIds.includes(resource.id)
        );

        setFavoriteResources(matchedResources);
        setStatus("success");
      } catch (error) {
        console.error(error);
        setStatus("error");
      }
    }

    loadFavorites();
  }, [currentUser]);

  function handleFavoriteChange(resourceId, isNowFavorite) {
    if (!isNowFavorite) {
      setFavoriteResources((currentResources) =>
        currentResources.filter((resource) => resource.id !== resourceId)
      );
    }
  }

  if (status === "loading") {
    return (
      <section className="page">
        <h1>Favorites</h1>
        <p>Loading favorites...</p>
      </section>
    );
  }

  return (
    <section className="page">
      <h1>Favorites</h1>

      <p>Your saved cybersecurity learning topics.</p>

      {favoriteResources.length === 0 ? (
        <div className="empty-state">
          <h2>No favorites yet</h2>
          <p>Go to the Learn page and save topics you want to revisit.</p>
        </div>
      ) : (
        <div className="card-grid">
          {favoriteResources.map((resource) => (
            <ResourceCard
              key={resource.id}
              resource={resource}
              isFavorite={true}
              onFavoriteChange={handleFavoriteChange}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Favorites;