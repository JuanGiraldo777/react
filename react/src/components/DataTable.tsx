import { useState } from "react";

// Interface para definir las propiedades de cada columna
interface ColumnaProps<T> {
  clave: keyof T;
  titulo: string;
}

// Interface para definir las propiedades del componente DataTable
interface DataTableProps<T> {
  datos: T[];
  columnas: ColumnaProps<T>[];
}

// Componente DataTable genérico
export function DataTable<T>({ datos, columnas }: DataTableProps<T>) {
  const [filaEditando, setFilaEditando] = useState<Partial<T> | null>(null);

  return (
    <>
      <table>
        <thead>
          <tr>
            {columnas.map((columna) => (
              <th key={columna.clave.toString()}>{columna.titulo}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {datos.map((fila, index) => (
            <tr key={index} onClick={() => setFilaEditando(fila)}>
              {columnas.map((columna) => (
                <td key={columna.clave.toString()}>
                  {fila[columna.clave] as string}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {filaEditando && (
        <div>
          <h3>Editando:</h3>
          <pre>{JSON.stringify(filaEditando, null, 2)}</pre>
        </div>
      )}
    </>
  );
}
