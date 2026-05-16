import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { addFavorite, removeFavorite } from "../firebase/firestoreService";

function ResourceCard({ resource, isFavorite = false }) {
  const { currentUser } = useAuth();
  const [saved, setSaved] = useState(isFavorite);
  const [isSaving, setIsSaving] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");

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

      <div className="card-actions">
        <Link className="button" to={`/topics/${resource.id}`}>
          Read more
        </Link>

        <button
          className="button secondary-button"
          type="button"
          onClick={handleFavoriteClick}
          disabled={isSaving}
        >
          {isSaving
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
    </article>
  );
}

export default ResourceCard;