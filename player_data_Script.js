// Importa fs desde el proceso principal
const fs = require('fs');
const path = require('path');

const saveDataPath = path.join(__dirname, '../data/data.json');

function guardarDatos(data) {
    fs.writeFileSync(saveDataPath, JSON.stringify(data), 'utf8');
    console.log("Datos guardados en save_data.json");
}

function leerDatos() {
    try {
        const data = fs.readFileSync(saveDataPath, 'utf8');
        const miVariableRecuperada = JSON.parse(data);
        console.log("Datos leídos desde save_data.json:", miVariableRecuperada);
        return miVariableRecuperada;
    } catch (error) {
        console.error("Error al leer los datos:", error);
        return null;
    }
}

/*
let testJson = document.getElementById('testJson');
testJson.textContent = leerDatos();
*/