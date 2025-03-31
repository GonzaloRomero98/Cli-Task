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
-Para poder ejecutar el programa, debemos abrir la termina e ir a la ruta del archivo donde se guardo.
-Luego de entrar a la ruta, ingresar el comando de **npm run task-cli **
-antes de dar enter se debe ingresar lo que se debe hacer: 
  -Si desea agreagar una tarea :  **npm run task-cli add "la tarea que desea guardar"**
  -Si desea eliminar una tarea : **npm run task-cli delete "id"**
  -si desea Listar todas las tareas: **npm run task-cli list¨**
  -Si desea listar por las no iniciadas: *npm run task-cli todo
  -Si desea listar por las en proceso: **npm run task-cli list in-progress**
  -Si desea listar por las terminadas: **npm run task-cli list done**
