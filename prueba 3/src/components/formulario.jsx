import { useState } from 'react';
import './App.css';
// 1. Importamos los componentes hijos
import Formulario from './components/Formulario';
import ListaVehiculos from './components/ListaVehiculos';

function App() {
  // 2. Definición del Estado Principal (Fase 2)
  const [vehiculos, setVehiculos] = useState([]);

  // 3. Función para agregar un vehículo (Fase 2 - Comunicación entre jerarquías)
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
          {/* Pasamos la función como prop al formulario */}
          <Formulario onAgregar={agregarVehiculo} />
        </section>
        
        <section className="list-section">
          {/* Pasamos el arreglo de vehículos a la lista para que los muestre */}
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