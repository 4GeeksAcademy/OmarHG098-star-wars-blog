import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const PersonDescription = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const item = store.person.name;

  useEffect(() => {
    actions.getPerson(params.id);
  }, []);
  console.log(store.person);

  return (
    <div className="d-flex">
      <div className="card custom-card my-2 mx-auto bg-transparent text-warning border border-warning m-2">
        <img
          className="card-img-top"
          src={
            "https://starwars-visualguide.com/assets/img/characters/" +
            params.id +
            ".jpg"
          }
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{store.person.name}</h5>
          <p className="card-text">
          Birth year: {store.person.birth_year}
          </p>
        </div>
        <ul>
          <li>Height: {store.person.height}</li>
          <li>Eye color: {store.person.eye_color}</li>
          <li>Mass: {store.person.mass}</li>
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

export default PersonDescription;
