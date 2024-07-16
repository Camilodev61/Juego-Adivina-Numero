let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados =[]; 
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto){
    let elementoHTMl = document.querySelector(elemento);
    elementoHTMl.innerHTML = texto;
    return;
}
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("numeroUsuario").value);
    console.log(numeroSecreto);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento("p", `Acertaste el numero en ${intentos} ${(intentos==1)? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else {
        // el usuario no acerto
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento("p", "El numero es menor"); 
        }else {
            asignarTextoElemento("p", "El numero es mayor");
        }
        intentos++;
        limpiarcaja();
    }
    return;
}
function limpiarcaja(){
      document.querySelector("#numeroUsuario").value = "";
     
    return;
}

function genereNumeroSecreto() {
     let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
     console.log(numeroGenerado);
     console.log(listaNumerosSorteados);

    if(listaNumerosSorteados.length === numeroMaximo){
        asignarTextoElemento("p", "Ya se sortearon todos los numeros posibles")

    }else{

          // esta es la condicion de mi array
   if (listaNumerosSorteados.includes(numeroGenerado)) {
    return genereNumeroSecreto();
   }else{
    listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;
   }

    }
   
     
    

}
function condicionesIniciales() {
    asignarTextoElemento("h1", "Juego del numero secreto!")
    asignarTextoElemento("p", ` Escoge un numero del 1 al ${numeroMaximo}`)
    numeroSecreto = genereNumeroSecreto();
    intentos = 1;
    return;
    
}
function reiniciarJuego() {
    //limpiar la  caja
    limpiarcaja();
    //indicar mensaje de intervalo de  numeros
    //Generar numero aleatorio
    condicionesIniciales();
    //Inicializar juego
    //Deshabilitar boton juego de nuevo
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
    
}
condicionesIniciales();
