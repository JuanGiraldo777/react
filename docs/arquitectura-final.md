## Genéricos

Los genéricos como `DataTable<T>` y `obtenerRecurso<T>` me ayudaron a no usar `any`. Así, cada componente y cada función sabe qué tipo de datos recibe y devuelve. En un proyecto reutilizable, esto reduce errores porque TypeScript avisa si intento usar un campo que no existe o si paso un dato con una forma distinta.

## Uniones discriminadas

Las uniones discriminadas como `EstadoMatricula` con `MatriculaActiva`, `MatriculaSuspendida` y `MatriculaFinalizada` hacen que el código sea más claro. Cada caso tiene su propia estructura y TypeScript obliga a tratar todos los estados. Gracias a eso, es más difícil olvidarse de una situación importante y el programa queda mejor controlado.

## Tipo never

El tipo `never` en el `default` del `switch` de `generarReporte` sirve como una comprobación final. Si en el futuro se añade un estado nuevo y no se escribe su `case`, TypeScript lo detecta en compilación. Eso evita que el error aparezca más tarde en ejecución, cuando ya sería más complicado de localizar.

## Partial<T>

`Partial<T>` en el estado de edición de `DataTable` permite trabajar con objetos incompletos de forma segura. Esto es útil cuando el usuario solo ha rellenado algunos campos y todavía faltan otros. Aunque el objeto no esté completo, el tipado sigue activo y no se pierde la ayuda de TypeScript para evitar errores.