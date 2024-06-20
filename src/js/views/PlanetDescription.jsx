import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../store/appContext'

const PlanetDescription = () => {
  const { store, actions } = useContext(Context)
  const params = useParams();
  useEffect(()=>{
    actions.getPlanet(params.id);
  },[]);
  console.log(store.planet);

  return (
    <div className="d-flex">
    <div className="card custom-card my-2 mx-auto bg-transparent text-warning border border-warning m-2" >
      <img className="card-img-top"  src={"https://starwars-visualguide.com/assets/img/planets/" + (params.id) + ".jpg"} alt="Card image cap" />
      <div className="card-body ">
        <h5 className="card-title">{store.planet.name}</h5>
        <p className="card-text">
          <strong>Population: </strong>{store.planet.population}
        </p>
      </div>
      <ul>
        <li>Diameter: {store.planet.diameter}</li>
        <li>Climate: {store.planet.climate}</li>
        <li>Orbital period: {store.planet.orbital_period}</li>
      </ul>
      <div className="card-footer">
      <button className="btn btn-danger"><i className="far fa-heart"></i>
      </button>
      </div>
    </div>
    </div>
  );
}

export default PlanetDescription