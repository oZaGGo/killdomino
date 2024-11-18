// Importa fs desde el proceso principal
const fs = require('fs');
const path = require('path');

const saveDataPath = path.join(__dirname, '../data/data.json');

function guardarDatos(data) {
    localStorage.setItem('data', JSON.stringify(data));
}

function leerDatos() {
    return localStorage.getItem('data');
}

/*
let testJson = document.getElementById('testJson');
testJson.textContent = leerDatos();
*/