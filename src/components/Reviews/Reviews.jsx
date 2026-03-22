import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../api/moviesApi";
import style from "./Reviews.module.css";

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getMovieReviews(movieId)
      .then(setReviews)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [movieId]);

  if (loading) return <p>Loading reviews...</p>;
  if (error) return <p>Error: {error}</p>;
  if (reviews.length === 0) return <p>No reviews yet</p>;

  return (
    <ul className={style.reviews_list}>
      {reviews.map(review => (
        <li key={review.id} className={style.review_item}>
          <p><strong>{review.user.username}:</strong> {review.comment}</p>
        </li>
      ))}
    </ul>
  );
}