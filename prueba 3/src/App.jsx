import { useState } from 'react';
import './App.css';
import Formulario from '/components/Formulario';
import ListaVehiculos from './components/ListaVehiculos'

function App() {
  cosnt [vehiculos, setVehiculos] = useState([]);

  const agregarVehiculo = (nuevoVehiculo) => {
    setVehiculos([...vehiculos, nuevoVehiculo]);
  };

  return (
    <div className="app-container">
      <header>
        <h1>Sistema de Control de Estacionamiento</h1>
        <p>INACAP - Programación Front End</p>
      </header>

      <main>
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
