import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "../../api/moviesApi";
import style from "./Cast.module.css";

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getMovieCredits(movieId)
      .then(data => {
        setCast(Array.isArray(data) ? data : data.cast || []);
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [movieId]);

  if (loading) return <p>Loading cast...</p>;
  if (error) return <p>Error: {error}</p>;
  if (cast.length === 0) return <p>No cast info available</p>;

  return (
    <ul className={style.cast_list}>
      {cast.map(member => {
        const headshot = member.person.images?.headshot?.full
          ? member.person.images.headshot.full 
          : "https://via.placeholder.com/100x150?text=No+Photo";

        return (
          <li key={member.person.ids.trakt} className={style.cast_item}>
            <img src={headshot} alt={member.person.name} className={style.cast_img} />
            <p>{member.person.name}</p>
            <p className={style.character}>as {member.character}</p>
          </li>
        );
      })}
    </ul>
  );
}