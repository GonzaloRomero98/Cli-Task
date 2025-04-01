const {argv} = require('node:process');
const fs = require('node:fs');

class Task{
    constructor(id, task, status, createAt, updatedAt){
        this.id = id,
        this.task = task, 
        this.status = status,
        this.createAt = createAt,
        this.updatedAt = updatedAt
    }
}

// funcion para leer el Json
const readJson = () =>{
    const data = fs.readFileSync('task.json', 'utf8');
    return JSON.parse(data);
}

// funcion para escribir el Json
const writeFile  = async (data)=>{
    fs.writeFile("task.json", data, (err)=>{

        if(err !== null){
            return false
        }else{
            return true
        }
    })
}

// Crear el archivo json si no exsite
const createDbJson = () =>{
    const jsonName = "task.json";

    if(!fs.existsSync(jsonName)){
        const initialData = JSON.stringify([]);
        fs.writeFileSync(jsonName, initialData, 'utf8');
        console.log('File Created!!!');
    }
}

// Agregar una tarea al json
const add = async (task) =>{
    try{
        let lastId = 0;

        const dataJson = readJson();

        if(dataJson.length > 0){

            lastId = dataJson[dataJson.length - 1].id;

        }

        const jsonData = new Task(lastId + 1, task, "not done", new Date().toDateString(), null);

        dataJson.push(jsonData);

        const jsonString = JSON.stringify(dataJson, null, 2);

        const isWrite = await writeFile(jsonString);

        console.log(isWrite ? 'Task added' : 'Error writing file');

    }catch(e){
        console.error(e)
    }
}

// Eliminar una tarea del json
const Delete = (id) =>{
    try{
        const dataJson = readJson();
        const filterDataId = dataJson.filter((task) => task.id !== parseInt(id));
        const jsonString = JSON.stringify(filterDataId, null , 2);
        fs.writeFile("task.json", jsonString, (err)=>{
            if(err){
                console.error(err);
            }else{
                console.log('task deleted');
            }
        })
    }catch(e){
        console.error(e);
    }
}

//Funcion para listar las tareas por status
const List = (typeList) =>{
    try{
        const dataJson = readJson();

        switch(typeList){

            case undefined:
                const filterData = dataJson.filter((task) => task.status === typeList);
                console.log(filterData);
                break;

            case 'done':
                console.log('--- List of done Tasks --- ');
                const filterDataDone = dataJson.filter((task)=> task.status === 'done');
                console.log(filterDataDone.length > 0 ? filterDataDone : 'No task done yet');
                break

            case 'todo':
                console.log('--- List of todo Task ---');
                const filterDataTodo = dataJson.filter((task)=> task.status === 'not done');
                console.log(filterDataTodo.length > 0 ? filterDataTodo : 'No task todo yet');
                break;

            case 'in-progress':
                console.log('--- List of in-progress Task ---');
                const filterDataInProgress = dataJson.filter((task)=> task.status === 'in-progress');
                console.log(filterDataInProgress.length > 0 ? filterDataInProgress : 'No task in-progress yet');
                break;

            default:
                console.log('Invalid option')
                break;
        }
        
    }catch(e){
        console.error(e);
    }
}

//Funcion para actualizar una tarea
const Update = (id) =>{
    try{
        const dataJson = readJson();
        const taskUpdate = argv[4];
        dataJson.forEach((task)=>{
            
            if(task.id === parseInt(id)){
                task.task = taskUpdate;
                task.updatedAt = new Date().toDateString();
            }
        })
        const jsonString = JSON.stringify(dataJson, null, 2);


        const isWrite = writeFile(jsonString);

        console.log(isWrite ? 'Task updated' : 'Error writing file');

    }catch(e){ 
        console.error(e);
    } 
}

//funcion para marcar una tarea como done o in-progress
const mark = (id, typeMark)=>{
    try{
        const dataJson = readJson();
        dataJson.forEach((task)=>{
            if(task.id === parseInt(id)){
                task.status = typeMark;
                task.updatedAt = new Date().toDateString();
            }
        })
        const jsonString = JSON.stringify(dataJson, null, 2);
        const isWrite = writeFile(jsonString);
        console.log(isWrite ? `Task marked as ${typeMark}` : 'Error writing file');

    }catch(e){
        console.error(e);
    }
}

// Validar los argumentos de la linea de comandos
const validateList = {
    undefined : true,
    "done" : true,
    "todo" : true,
    "in-progress": true
}

// funcion de menu para ejecutar las funciones
const menu = (typetask) =>{
    const id = argv[3];
    switch(typetask){
        case 'add':
            add(id);
            break;
        case 'delete':
            Delete(id);
            break;
        case 'update':
            Update(id);
            break;
        case 'list':
            const typeList = argv[3];

            if(validateList[typeList]){
                List(typeList);
                break;
            }
            console.log('Invalid option')
            break;
        case 'mark-in-progress':
            mark(id, 'in-progress');
            break;
        case 'mark-done':
            mark(id, 'done');
            break;
        default:
            console.log('Invalid option')
    }
}

createDbJson();
menu(argv[2]);
