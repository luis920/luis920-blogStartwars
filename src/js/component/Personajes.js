import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

const CardPersonajes = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.loadPersonas(); 
  }, [actions]);
  
  const personas = store.personas || [];

  
  return (
    <div className="container mt-5">
      <div className="row">
        {personas.map((persona) => (
          <div key={persona.uid} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h3>{persona.name}</h3>
                <p>Género: {persona.gender}</p>
                <p>Color de ojos: {persona.eye_color}</p>
                <p>Color de cabello: {persona.hair_color}</p>

                <Link to={`/demo`}>
                  <button className="btn btn-primary">Más Información</button>
                </Link>

                <button
                  onClick={() => actions.agregarAFavoritos(persona)} 
                  className="añadir btn-secondary mt-2"
                >
                  ♡
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardPersonajes;
