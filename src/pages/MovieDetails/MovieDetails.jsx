import { useEffect, useState } from "react";
import { useParams, Link, Outlet } from "react-router-dom";
import { getMovieDetails } from "../../api/moviesApi";
import style from "./MovieDetails.module.css";

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getMovieDetails(movieId)
      .then(setMovie)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [movieId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!movie) return <p>No movie found</p>;

  const posterUrl = movie.images?.poster?.[0]
  ? `https://${movie.images.poster[0]}`
  : "https://via.placeholder.com/300x450?text=No+Image";
  return (
    <div className={style.details}>
      <h2>{movie.title} ({movie.year})</h2>
      <img src={posterUrl} alt={movie.title} className={style.poster} />
      <p>{movie.overview}</p>
      <p><strong>Rating:</strong> {movie.rating}</p>

      <nav className={style.nav}>
        <Link to="cast">Cast</Link> | <Link to="reviews">Reviews</Link>
      </nav>

      {/* Тут будуть рендеритись вкладені маршрути */}
      <Outlet />
    </div>
  );
}