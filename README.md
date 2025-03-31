# To-Do App en JavaScript (Consola)

Una simple aplicación de lista de tareas (To-Do App) implementada en JavaScript, que se ejecuta directamente desde la consola. 
Esta app permite agregar, eliminar y mostrar tareas de una lista, a traves de los distintos comandos

## Características

- **add**: Añadir nuevas tareas a la lista.
- **list**: Mostrar todas o filtrar las tareas actuales en la lista .
- **Delete**: Eliminar tareas completadas o por algun error.

## Requisitos
- Contar con una terminal
- Tener pequeños conocimientos en consola

## Uso
1.-Para poder ejecutar el programa, debemos abrir la termina e ir a la ruta del archivo donde se guardo.
2-Luego de entrar a la ruta, ingresar el comando de **npm run task-cli **
3-Antes de dar enter se debe ingresar lo que se debe hacer: 
  3.1) Si desea agreagar una tarea :  **npm run task-cli add "la tarea que desea guardar"**
  3.2) Si desea eliminar una tarea : **npm run task-cli delete "id"**
  3.3) si desea Listar todas las tareas: **npm run task-cli list¨**
  3.4) Si desea listar por las no iniciadas: *npm run task-cli todo
  3.5) Si desea listar por las en proceso: **npm run task-cli list in-progress**
  3.6) Si desea listar por las terminadas: **npm run task-cli list done**
