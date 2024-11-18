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