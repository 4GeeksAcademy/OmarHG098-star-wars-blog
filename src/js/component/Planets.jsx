import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Planets = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="d-flex element-containers gap-3">
      {store.planets.map((planet, idx) => {
        return (
          <div className="card custom-card my-2 mx-auto bg-transparent text-warning border border-warning m-2" key={planet + idx}>
            <img
              className="card-img-top"
              src={`https://starwars-visualguide.com/assets/img/planets/${
                idx + 1
              }.jpg`}
              alt={`${planet.name} image cap`}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src="https://vignette.wikia.nocookie.net/starwars/images/7/7e/Tatooine_EotECR.png/revision/latest?cb=20170222030444";
              }}
            />
            <div className="card-body">
              <h5 className="card-title">{planet.name}</h5>
              <p className="card-text">
              From lush forests and barren deserts to bustling cityscapes and remote ice worlds, each with its own unique cultures, species, and histories woven into the fabric of the galaxy.
              </p>
              <div className="card-footer border-0 d-flex justify-content-between">
                <Link
                  to={`/planet-description/${idx + 1}`}
                  className="btn btn-primary"
                >
                  Learn more
                </Link>
                <button className="btn btn-danger" onClick={() => actions.addFavorite(planet.name)}>
                  <i className="far fa-heart"></i>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Planets;
