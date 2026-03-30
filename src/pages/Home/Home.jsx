import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { fetchTrending } from "../../api/moviesApi";
import style from "./Home.module.css";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchTrending().then(setMovies).catch(console.error);
  }, []);

  return (
    <div>
      <h1 className={style.home_title}>Trending Movies</h1>
      <ul className={style.home_list}>
        {movies.map(item => (
          <li key={item.movie.ids.trakt} className={style.home_item}>
            <Link to={`/movies/${item.movie.ids.trakt}`} state={{from:location}}>
              {item.movie.title} ({item.movie.year})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}