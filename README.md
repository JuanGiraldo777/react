## Título y descripción breve del proyecto

Este es un proyecto React con TypeScript creado con Vite. Lo hice como parte de un proyecto universitario para practicar componentes reutilizables, tipado estricto y utilidades de fechas.

## Tecnologías utilizadas

- React con Vite
- TypeScript con modo strict
- date-fns para manejo de fechas

## Componente DataTable<T>

`DataTable<T>` es un componente genérico que acepta cualquier tipo de dato. Sus props están tipadas con la interfaz `DataTableProps<T>`, así que el componente sabe qué recibe en cada caso. Las columnas se definen con `keyof T` para mantener la seguridad de tipos, y el estado de edición de la fila usa `Partial<T>` para trabajar con datos incompletos de forma segura.

## Función utilitaria de fechas

La función `calcularDiferenciaEnDias` trabaja con tipos estrictos `Date`, así que no mezcla valores inseguros ni formatos raros. Para hacer el cálculo usa `differenceInDays` de `date-fns`, lo que hace el código más claro y más fiable.

## Verificación de tipos

La comprobación con `npx tsc --noEmit` da como resultado 0 errores. Eso me confirma que el proyecto compila bien y que el tipado está funcionando correctamente.

## Cómo ejecutar el proyecto

1. `npm install`
2. `npm run dev`
