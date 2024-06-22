import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar navbar-light bg-dark p-2 sticky-top">
      <Link to="/">
        <span className="navbar-brand mb-0 text-warning">
          <i className="fas fa-home"></i>
        </span>
      </Link>
      <span className="navbar-brand mb-0 text-warning">
          This is a guide for:
        </span>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle bg-transparent text-warning"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites {store.favorites.length}
          </button>
          <ul className="dropdown-menu bg-dark border border-warning container-fluid" aria-labelledby="dropdownMenuButton1">
		  {store.favorites.map((favorite, idx) => (
            <li className="d-flex justify-content-between" key={idx}>
              <a
                className="dropdown-item bg-transparent text-warning"
                onClick={() => actions.addFavorite(favorite)}
              >
                {favorite} <i className="fa fa-trash float-end"></i>
              </a>
			</li>))}
          </ul>
        </div>
    </nav>
  );
};
