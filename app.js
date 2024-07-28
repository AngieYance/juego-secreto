let numeroSecreto =0;
let intentos= 0;
let listaNumerosSorteados = []
let numeroMaximo = 10; 

function asignarTextoElemento(elemento, texto){
    let elementoHTML= document.querySelector(elemento);
    elementoHTML.innerHTML = texto; 
    return;
}

function verificarIntento(){
    let numeroDeUsuario= parseInt(document.getElementById('valorUsuario').value);
    console.log (intentos);
    if (numeroDeUsuario===numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos===1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //El usuario no accertó.
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos ++;
        limpiarCaja ();
    }
    return;
}

function limpiarCaja(){
   let valorCaja=  document.querySelector ('#valorUsuario');
    valorCaja.value= '' ;
}

function generaNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random ()*numeroMaximo)+1;

    console.log (numeroGenerado);
    console.log (listaNumerosSorteados);
    //si ya sorteamos todos los números podemos mostrar un mensaje en pantalla y cerrar el juego
    if (listaNumerosSorteados.length==numeroMaximo){

    }else{
        // Si el número generado está en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generaNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }    
}
function condicionesIniciales (){
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`); 
    numeroSecreto =generaNumeroSecreto();
    intentos= 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    // Indicar mensaje de intervalo de números
    //Generar el número aleatorio
    //inicializar el número de intentos
    condicionesIniciales();
     //Deshabilitar el botón de nuevo juego
    numeroSecreto =generaNumeroSecreto();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();