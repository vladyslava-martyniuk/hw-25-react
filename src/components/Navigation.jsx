import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <NavLink to="/trending-movies">Home</NavLink>
      {" | "}
      <NavLink to="/movies-search">Movies</NavLink>
    </nav>
  );
}