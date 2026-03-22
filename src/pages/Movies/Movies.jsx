import { useState } from "react";
import { Link } from "react-router-dom";
import { searchMovies } from "../../api/moviesApi";
import style from "./Movies.module.css";

export default function Movies() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await searchMovies(query);
    setMovies(data);
  };

  return (
    <div>
      <h1 className={style.movies_title}>Search Movies</h1>

      <form onSubmit={handleSubmit}>
        <input
          className={style.movies_input}
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Enter movie name"
        />
        <button className={style.movies_button} type="submit">Search</button>
      </form>

      <ul className={style.movies_list}>
        {movies.map(item => (
          <li key={item.movie.ids.trakt}>
            <Link to={`/movies/${item.movie.ids.trakt}`}>
              {item.movie.title} ({item.movie.year})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}



