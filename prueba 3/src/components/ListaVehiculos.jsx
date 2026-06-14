import React from 'react';
import CardVehiculo from './CardVehiculo';

function ListaVehiculos({ lista }) {
  return (
    <div className="lista-container">
      <h2>Vehículos en el Estacionamiento</h2>
      {lista.length === 0 ? (
        <p>No hay vehículos registrados en este momento.</p>
      ) : (
        <div className="tarjetas-flex-container">
          {lista.map((vehiculo) => (
            <CardVehiculo key={vehiculo.id} vehiculo={vehiculo} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ListaVehiculos;