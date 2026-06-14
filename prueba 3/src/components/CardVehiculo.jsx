import React from 'react';

function CardVehiculo({ vehiculo }) {
  const { patente, marca, permanente } = vehiculo;

  return (
    <div className={`vehiculo-card ${permanente ? 'clase-permanente' : 'clase-temporal'}`}>
      <h3>{patente}</h3>
      <p>Marca: {marca}</p>
      <span className="badge">
        {permanente ? 'Residente Permanente' : 'Visita Temporal'}
      </span>
    </div>
  );
}

export default CardVehiculo;