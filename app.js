const argv = require('./config/yargs').argv;
const color = require('colors');
const toDo = require('./to-do/to-do');

// console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = toDo.crear(argv.description);
        console.log(tarea);
        break;
    case 'listar':
        let listado = toDo.getListado();
        for (let tarea of listado) {
            console.log('===Tarea Por Hacer==='.green);
            console.log(tarea.description);
            console.log('Estado:', tarea.completado)
            console.log('====================='.green);
        }

        break;
    case 'actualizar':
        let actualizado = toDo.actualizar(argv.description, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrado = toDo.borrar(argv.description);
        console.log(borrado);
        break;

    default:
        console.log('No se encontro comando');
}
