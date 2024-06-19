import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const PersonDescription = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    actions.getPerson(params.id);
  }, []);
  console.log(store.person);

  return (
    <div className="d-flex">
    <div className="card col-3 mx-auto" >
      <img className="card-img-top" style={{ height: "500px" }} src={"https://starwars-visualguide.com/assets/img/characters/" + (params.id) + ".jpg"} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{store.person.name}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Height: {store.person.height}</li>
        <li className="list-group-item">Eye color: {store.person.eye_color}</li>
        <li className="list-group-item">Mass: {store.person.mass}</li>
      </ul>
      <div className="card-footer">
      <button className="btn btn-danger"><i class="far fa-heart"></i>
      </button>
      </div>
    </div>
    </div>
  );
};

export default PersonDescription;
