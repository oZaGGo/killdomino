let dadoSeleccionado = "";

let dadosMano = 10; //cantidad de dados en la mano

let dadosJugados = 0; //cantidad de dados jugados

let desplazamientoManoJugada = -430; //en px, son 215 por es lo que ocupa una pieza en horizontal

let caraNecesaria = 4; //cara necesaria para poner el dado correcto (pongo 1 por defecto para hacer tests)

let dadoInvisible = 8; //dados invisible al que se quiere revelar


//Crear sistema de turnos contra la IA

let turno = 0; //0 es turno de la IA y 1 es turno del jugador

let primerTurno = true; //Para simbolizar un supuesto "primer turno"

let fichasIA = 7; //Numero imaginario de fichas que tiene la ia