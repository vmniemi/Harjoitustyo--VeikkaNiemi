import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { starterResources } from "../data/starterResources";
import { useAuth } from "../context/AuthContext";
import {
  addFavorite,
  removeFavorite,
  getUserFavorites,
} from "../firebase/firestoreService";

function TopicDetails() {
  const { id } = useParams();
  const { currentUser } = useAuth();

  const resource = starterResources.find((item) => item.id === id);

  const [saved, setSaved] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isCheckingFavorite, setIsCheckingFavorite] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");

  useEffect(() => {
    async function checkFavoriteStatus() {
      if (!currentUser || !resource) {
        setSaved(false);
        return;
      }

      setIsCheckingFavorite(true);

      try {
        const favoriteIds = await getUserFavorites(currentUser.uid);
        setSaved(favoriteIds.includes(resource.id));
      } catch (error) {
        console.error("Could not check favorite status:", error);
      } finally {
        setIsCheckingFavorite(false);
      }
    }

    checkFavoriteStatus();
    }, [currentUser, id]);

  function showTemporaryFeedback(message) {
    setFeedbackMessage(message);

    setTimeout(() => {
      setFeedbackMessage("");
    }, 2500);
  }

  async function handleFavoriteClick() {
    if (!currentUser) {
      showTemporaryFeedback("Please log in to save favorites.");
      return;
    }

    if (!resource) return;

    setIsSaving(true);
    setFeedbackMessage("");

    try {
      if (saved) {
        await removeFavorite(currentUser.uid, resource.id);
        setSaved(false);
        showTemporaryFeedback("Removed from favorites.");
      } else {
        await addFavorite(currentUser.uid, resource.id, currentUser.email);
        setSaved(true);
        showTemporaryFeedback("Added to favorites.");
      }
    } catch (error) {
      console.error(error);
      showTemporaryFeedback("Could not update favorite. Try again.");
    } finally {
      setIsSaving(false);
    }
  }

  if (!resource) {
    return (
      <section className="page">
        <h1>Topic not found</h1>
        <Link to="/learn">Back to learning topics</Link>
      </section>
    );
  }

  return (
    <section className="page topic-details">
      <Link to="/learn">← Back to Learn</Link>

      <div className="topic-header">
        <div>
          <h1>{resource.title}</h1>
          <p className="meta">
            {resource.category} · {resource.difficulty}
          </p>
        </div>

        <button
          className="button secondary-button"
          type="button"
          onClick={handleFavoriteClick}
          disabled={isSaving || isCheckingFavorite}
        >
          {isCheckingFavorite
            ? "Checking..."
            : isSaving
            ? "Updating..."
            : saved
            ? "Remove favorite"
            : "Save favorite"}
        </button>
      </div>

      {feedbackMessage && (
        <p className="favorite-feedback" role="status" aria-live="polite">
          {feedbackMessage}
        </p>
      )}

      <article className="details-card">
        <h2>Summary</h2>
        <p>{resource.summary}</p>

        <h2>Explanation</h2>
        <p>{resource.content}</p>

        <h2>Tags</h2>
        <ul className="tag-list">
          {resource.tags.map((tag) => (
            <li key={tag}>#{tag}</li>
          ))}
        </ul>
      </article>
    </section>
  );
}

export default TopicDetails;