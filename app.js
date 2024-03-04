let numeroSecreto;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {    //funcion para automatizar la entrada de titulos
    let elementoHTML = document.querySelector(elemento); //variable por eso sin comillas
    elementoHTML.innerHTML = texto;
}

function intentoDeUsuario() {
    alert("itwork");
}
function generarNumero() {
    //si ya sorteamo todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento("p","ya se sortearon todos los numeros posibles")

    } else {
        let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
        //si el numero generadop esta en lista hacer una operacion si no hacer 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumero();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("numeroUsuario").value);

    if (numeroSecreto === numeroDeUsuario) {
        asignarTextoElemento("p", `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
        //el usuario no acerto
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p", "El numero secreto es menor");
        } else {
            asignarTextoElemento("p", "El numero secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }


    return;
}

function limpiarCaja() {
    document.querySelector("#numeroUsuario").value = "";
}

function condicionesIniciales() {
    asignarTextoElemento("h1", "Juego del numero secreto"); //llamada a la funcion 
    asignarTextoElemento("p", "Selecciona un numero del 1 al 10"); //llamada a la funcion 
    numeroSecreto = generarNumero();
    //inicializar el numero de intentos
    intentos = 1
}

function reiniciarJuego() {
    //limpiar la caja 
    limpiarCaja();
    //indicar mensaje de inicio
    condicionesIniciales()
    //deshabilitar el boton de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();

