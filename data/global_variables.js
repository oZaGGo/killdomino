/*

This script contains the main variables of the game and electron imports.


*/

const { ipcRenderer } = require('electron');

//-------------------------------------------------------------------------------------------------------------------------------------------------------


let dados = ["11", "12", "13", "14", "15", "16", "22", "23", "24", "25", "26", "33", "34", "35", "36", "44", "45", "46", "55", "56", "66"
,"12t","23t","34t","56t","16t","01f","02f","03f","04f","05f","06f","01n","02p","03n","04p","05n","06p","00e","00c","00c"] //todos los dados disponibles


//dados = ["00e","00e","00e","00e","00e","00e","00e","00e","00e","00e","00e","00e","00e","00e","00e","00e","00e","00e","00e"]

//let dados = ["66", "66", "66", "66", "66", "66", "66", "66", "66", "66", "66", "66", "66", "66", "66", "66", "66", "66", "66", "66", "66", "66", "66", "66", "66", "66", "66", "66", "66", "66", "66", "66", "66", "66", "66", "66", "66", "66", "66", "66", "66"];

let objetos = ["luck","demon","coin","blank","lastBurn","mirror","magnetic","tedTalk"] //todos los objetos disponibles
//objetos = ["mirror","mirror","mirror","mirror"] //todos los objetos disponibles
//objetos = ["luck","luck","luck","luck"] //todos los objetos disponibles
//objetos = ["demon","demon","demon","demon"] //todos los objetos disponibles
//objetos = ["coin","coin","coin","coin"] //todos los objetos disponibles
//objetos = ["blank","blank","blank","blank"] //todos los objetos disponibles
//objetos = ["lastBurn","lastBurn","lastBurn","lastBurn"] //todos los objetos disponibles
//objetos = ["magnetic","magnetic","magnetic","magnetic"] //todos los objetos disponibles
//objetos = ["tedTalk","tedTalk","tedTalk","tedTalk"] //todos los objetos disponibles
//objetos = ["coin","blank","mirror"] //Os que levo de momento

let dadosVisibles = []; //dados de la mano

let dadosRestantes = 7;

let dadosSeleccionados = [];

//-------------------------------------------------------------------------------------------------------------------------------------------------------


let dadoSeleccionado = "";

let dadosMano = 10; //cantidad de dados en la mano

let dadosJugados = 0; //cantidad de dados jugados

let desplazamientoManoJugada = 0; 

let desplazamientoManoJugadaOld = 0;

let caraNecesaria = ""; //cara necesaria para poner el dado correcto (pongo 1 por defecto para hacer tests)

let dadoInvisible = 8; //dados invisible al que se quiere revelar

let dadosInvisiblesRestantes = 3; //dados invisibles restantes


//-------------------------------------------------------------------------------------------------------------------------------------------------------

//Crear sistema de turnos contra la IA

let turno = 0; //0 es turno de la IA y 1 es turno del jugador

let primerTurno = true; //Para simbolizar un supuesto "primer turno"

let ronda = 1; //ronda actual

let roundDamage = 5; //daño base por ronda

let exedCash = 1; //limitar el exceso de cash en la banca



//-------------------------------------------------------------------------------------------------------------------------------------------------------

//Sistema de combos del juego

let comboNumber = 0;

let playerHP = 100;

let maxBet = 200;

let damageCombo = 0;

let damageComboIA = 0;

let betCombo = 0.5; //dinero por puntuacion

let estadoFicha;

let moneyOptained;

//Para controlar el efecto de subida de nota al jugar pieza

let bipCounter = 1

let bipSOund;

let impactBass = document.getElementById("impactBass");

//-------------------------------------------------------------------------------------------------------------------------------------------------------


//funcion para hacer esperas y timear cosas

function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------

//Variables para el menu de pausa

let pauseMenu = 0;

//-------------------------------------------------------------------------------------------------------------------------------------------------------

//Variables para el sistema de ajuste de UI

let screenX 
let screenY 
let minmax

//-------------------------------------------------------------------------------------------------------------------------------------------------------

//Variables para el sistema de inteligencia de la IA

let bellTouched = false;

//-------------------------------------------------------------------------------------------------------------------------------------------------------

//Variables para el sistema de objetos

let mirrored = false;

let turnObject = 0;

let blankUsed = false;

let blankFace = false;

let lustBurnSelected = false;

let coinEarnings = false;

let luck = false;

let magnetic = false;