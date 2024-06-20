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
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">{planet.name}</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div className="card-footer border-0 d-flex justify-content-between">
                <Link
                  to={`/planet-description/${idx + 1}`}
                  className="btn btn-primary"
                >
                  Learn more
                </Link>
                <button className="btn btn-danger" onClick={() => actions.addFavorite(planet)}>
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
