import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const VehicleDescription = (vehicle) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const item = store.vehicle.name;

  useEffect(() => {
    actions.getVehicle(params.id);
  }, []);
  console.log(store.vehicle);

  return (
    <div className="d-flex">
      <div className="card custom-card my-2 mx-auto bg-transparent text-warning border border-warning m-2">
      <img
          className="card-img-top"
          src={
            "https://starwars-visualguide.com/assets/img/vehicles/" +
            params.id +
            ".jpg"
          }
          alt="Card image cap"
        />
        <div className="card-body ">
          <h5 className="card-title">{store.vehicle.name}</h5>
          <p className="card-text">
            <strong>Population: </strong>
            {store.vehicle.population}
          </p>
        </div>
        <ul>
          <li>Max. speed: {store.vehicle.max_atmospheric_speed}</li>
          <li>Cargo capacity: {store.vehicle.cargo_capacity}</li>
          <li>Manufacturer: {store.vehicle.manufacturer}</li>
        </ul>
        <div className="card-footer">
          <button
            className="btn btn-danger"
            onClick={() => actions.addFavorite(item)}
          >
            <i className="far fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VehicleDescription;
