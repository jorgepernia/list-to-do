const fs = require('fs');

let listToDo = [];

const saveDB = () => {
    let data = JSON.stringify(listToDo);
    fs.writeFile('db/data.json', data, err => {
        if (err) throw new Error('no se pudo grabar', err)
    });
}

const cargarDB = () => {
    try {
        listToDo = require('../db/data.json');
    } catch (err) {
        listToDo = [];
    }
}

const crear = (description) => {

    cargarDB();

    let toDo = {
        description,
        completado: false
    }
    listToDo.push(toDo);
    saveDB();
    return toDo;
}

const getListado = () => {
    cargarDB();
    return listToDo;
}

const actualizar = (description, completado) => {
    cargarDB();
    let index = listToDo.findIndex(tarea => {
        return tarea.description === description;
    });

    if (index >= 0) {
        listToDo[index].completado = completado;
        saveDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (description) => {

    cargarDB();
    let nuevolisToDo = listToDo.filter(tarea => {
        return tarea.description !== description;
    });

    if (listToDo.length === nuevolisToDo.length) {
        return false;
    } else {
        listToDo = nuevolisToDo;
        saveDB();
        return true;
    }

}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}