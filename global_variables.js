/*

This script contains the main variables of the game.


*/

//-------------------------------------------------------------------------------------------------------------------------------------------------------

let dados = ["11", "12", "13", "14", "15", "16", "22", "23", "24", "25", "26", "33", "34", "35", "36", "44", "45", "46", "55", "56", "66"
,"12t","23t","34t","56t","16t","01f","02f","03f","04f","05f","06f"] //todos los dados disponibles


let dadosVisibles = []; //dados de la mano

let dadosRestantes = 7;

//-------------------------------------------------------------------------------------------------------------------------------------------------------


let dadoSeleccionado = "";

let dadosMano = 10; //cantidad de dados en la mano

let dadosJugados = 0; //cantidad de dados jugados

let desplazamientoManoJugada = -430; //en px, son 215 por es lo que ocupa una pieza en horizontal

let caraNecesaria = ""; //cara necesaria para poner el dado correcto (pongo 1 por defecto para hacer tests)

let dadoInvisible = 8; //dados invisible al que se quiere revelar

//-------------------------------------------------------------------------------------------------------------------------------------------------------

//Crear sistema de turnos contra la IA

let turno = 0; //0 es turno de la IA y 1 es turno del jugador

let primerTurno = true; //Para simbolizar un supuesto "primer turno"

let fichasIA = 7; //Numero imaginario de fichas que tiene la ia

//-------------------------------------------------------------------------------------------------------------------------------------------------------

//Sistema de combos del juego

let comboNumber = 0;

let playerHP = 20;

//-------------------------------------------------------------------------------------------------------------------------------------------------------


//funcion para hacer esperas y timear cosas

function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}