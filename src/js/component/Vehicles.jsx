import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Vehicles = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="d-flex element-containers gap-3">
      {store.vehicles.map((vehicle, idx) => {
        return (
          <div className="card custom-card my-2 mx-auto bg-transparent text-warning border border-warning m-2" key={vehicle + idx}>
            <img className="card-img-top" src="..." alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{vehicle.name}</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div className="card-footer border-0 d-flex justify-content-between">
                <Link
                  to={`/vehicle-description/${idx + 1}`}
                  className="btn btn-primary"
                >
                  Learn more
                </Link>
                <button className="btn btn-danger">
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

export default Vehicles;
