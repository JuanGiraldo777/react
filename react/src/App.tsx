import { DataTable } from "./components/DataTable";
import {calcularDiferenciaEnDias} from "./utils/dateUtils";
import "./App.css";

// Definimos los datos de prueba
const estudiantes = [
  { id: "1", nombreCompleto: "Juan García", carrera: "DAM", semestre: "2" },
  { id: "2", nombreCompleto: "Ana López", carrera: "DAW", semestre: "1" },
  { id: "3", nombreCompleto: "Pedro Ruiz", carrera: "ASIR", semestre: "3" },
];

// Definimos qué columnas mostrar y con qué título
type Estudiante = (typeof estudiantes)[number];

const columnas: { clave: keyof Estudiante; titulo: string }[] = [
  { clave: "nombreCompleto", titulo: "Nombre completo" },
  { clave: "carrera", titulo: "Carrera" },
  { clave: "semestre", titulo: "Semestre" },
];

function App() {
  return (
    <div>
      <h2>DataTable App</h2>
      <DataTable datos={estudiantes} columnas={columnas} />
    </div>
  );
}

const inicio = new Date('2024-12-31');
const fin = new Date('2025-12-31');
const dias = calcularDiferenciaEnDias(inicio, fin);

console.log(`Diferencia: ${dias} días`);

export default App;
