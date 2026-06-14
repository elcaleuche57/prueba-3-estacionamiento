import React, { useState } from 'react';

function Formulario({ onAgregar }) {
  // Estados locales para controlar lo que escribe el usuario
  const [patente, setPatente] = useState('');
  const [marca, setMarca] = useState('');
  const [permanente, setPermanente] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí irá la validación de la Fase 3 más adelante...

    // Creamos el objeto del nuevo vehículo
    const nuevoVehiculo = {
      id: Date.now(), // ID único para usar como key en el Virtual DOM
      patente: patente.toUpperCase().trim(),
      marca: marca.trim(),
      permanente: permanente
    };

    // Enviamos el vehículo al componente padre (App.jsx)
    onAgregar(nuevoVehiculo);

    // Limpiamos el formulario
    setPatente('');
    setMarca('');
    setPermanente(false);
  };

  return (
    <form className="vehiculo-form" onSubmit={handleSubmit}>
      <h2>Registrar Vehículo</h2>
      
      <div className="form-group">
        <label>Patente:</label>
        <input 
          type="text" 
          placeholder="AAAA11 o BBCC22"
          value={patente}
          onChange={(e) => setPatente(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Marca:</label>
        <input 
          type="text" 
          placeholder="Ej: Toyota"
          value={marca}
          onChange={(e) => setMarca(e.target.value)}
        />
      </div>

      <div className="form-group-checkbox">
        <label>
          <input 
            type="checkbox" 
            checked={permanente}
            onChange={(e) => setPermanente(e.target.checked)}
          />
          ¿Es residente permanente?
        </label>
      </div>

      <button type="submit">Ingresar Vehículo</button>
    </form>
  );
}

export default Formulario;