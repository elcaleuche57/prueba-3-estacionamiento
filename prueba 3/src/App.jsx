import { useState, useEffect } from 'react';
import './App.css';
import Formulario from './components/Formulario';
import ListaVehiculos from './components/ListaVehiculos';

function App() {
  const [vehiculos, setVehiculos] = useState(() => {
    const guardados = localStorage.getItem('vehiculos_estacionamiento');
    return guardados ? JSON.parse(guardados) : [];
  });

  useEffect(() => {
    localStorage.setItem('vehiculos_estacionamiento', JSON.stringify(vehiculos));
  }, [vehiculos]);

  const agregarVehiculo = (nuevoVehiculo) => {
    if (vehiculos.length >= 10) {
      alert('No quedan cupos disponibles. Capacidad máxima de 10 vehículos alcanzada.');
      return;
    }

    const patenteExiste = vehiculos.some(v => v.patente === nuevoVehiculo.patente);
    if (patenteExiste) {
      alert('Esta patente ya se encuentra registrada en el sistema.');
      return;
    }

    setVehiculos([...vehiculos, nuevoVehiculo]);
  };

  const cuposDisponibles = 10 - vehiculos.length;

  return (
    <div className="app-container">
      <header>
        <h1>Sistema de Control de Estacionamiento</h1>
        <p>INACAP - Programación Front End</p>
      </header>

      <main>
        <div className="cupos-info">
          <h3>Cupos Disponibles: {cuposDisponibles} / 10</h3>
        </div>

        <section className="form-section">
          <Formulario onAgregar={agregarVehiculo} />
        </section>
        
        <section className="list-section">
          <ListaVehiculos lista={vehiculos} />
        </section>
      </main>

      <footer>
        <p>&copy; 2026 - Sistema de Gestión de Cupos. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
