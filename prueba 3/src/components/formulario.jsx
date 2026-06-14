import React, { useState } from 'react';

function Formulario({ onAgregar }) {
  const [patente, setPatente] = useState('');
  const [marca, setMarca] = useState('');
  const [permanente, setPermanente] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!patente || !marca) {
      alert('Todos los campos son obligatorios.');
      return;
    }

    const formatoPatente = /^[A-Z]{4}\d{2}$/i;
    if (!formatoPatente.test(patente)) {
      alert('El formato de la patente debe ser de 4 letras y 2 números (Ej: ABCD12).');
      return;
    }

    const nuevoVehiculo = {
      id: Date.now().toString(),
      patente: patente.toUpperCase().trim(),
      marca: marca.trim(),
      permanente: permanente
    };

    onAgregar(nuevoVehiculo);

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
          placeholder="ABCD12"
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