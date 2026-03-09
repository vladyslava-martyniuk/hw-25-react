import { useEffect, useState } from "react";
import { fetchTrending } from "../../api/moviesApi";
import style from "./Home.module.css";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrending().then(setMovies);
  }, []);

  return (
    <div>
      <h1 className={style.home_title}>Trending Movies</h1>

      <ul className={style.home_list}>
        {movies.map(item => (
          <li className={style.home_item} key={item.movie.ids.trakt}>
            {item.movie.title}
          </li>
        ))}
      </ul>
    </div>
  );
}