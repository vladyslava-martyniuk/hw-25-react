import { NavLink } from "react-router-dom";
import style from "./Navigation.module.css";

export default function Navigation() { 
  return (
    <nav>
      <NavLink className={style. nav_link} to="/">Home</NavLink>
      {" | "}
      <NavLink className={style.nav_link} to="/movies-search">Movies</NavLink>
    </nav>
  );
}