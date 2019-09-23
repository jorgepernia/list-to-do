const description = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'crea un elemento por hacer', {
        description
    })
    .command('actualizar', 'Actualiza el estado de la tarea', {
        description,
        completado
    })
    .command('borrar', 'Borra una tarea ', {
        description
    })
    .help()
    .argv

module.exports = {
    argv
}