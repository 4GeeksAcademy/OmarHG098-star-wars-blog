import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const People = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="d-flex element-containers gap-3">
      {store.people.map((person, idx) => {
        return (
          <div className="card custom-card" key={person + idx}>
            <img className="card-img-top" src="..." alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{person.name}</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="/description" className="btn btn-primary">
                Learn more
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default People;
