
const botonTema = document.getElementById("btn-tema");


botonTema.addEventListener("click", function () {

  document.body.classList.toggle("oscuro");

 
  if (document.body.classList.contains("oscuro")) {
    botonTema.textContent = "Modo claro";
  } else {
  
    botonTema.textContent = "Modo oscuro";
  }
});



const hora = new Date().getHours();
const elementoSaludo = document.getElementById("saludo");


if (hora >= 6 && hora < 12) {
  elementoSaludo.textContent = "¡Buenos días! Bienvenido/a a mi portafolio";
} else if (hora >= 12 && hora < 20) {
  elementoSaludo.textContent = "¡Buenas tardes! Bienvenido/a a mi portafolio";
} else {
  
  elementoSaludo.textContent = "¡Buenas noches! Bienvenido/a a mi portafolio";
}



const botonVerMas = document.getElementById("btn-ver-mas");
const textoExtra = document.getElementById("texto-extra");

botonVerMas.addEventListener("click", function () {
  
  textoExtra.classList.toggle("oculto");

 
  if (textoExtra.classList.contains("oculto")) {
    botonVerMas.textContent = "Ver más";
  } else {
    botonVerMas.textContent = "Ver menos";
  }
});



let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let intentos = 0;

const inputNumero = document.getElementById("numero-ingresado");
const btnAdivinar = document.getElementById("btn-adivinar");
const resultadoJuego = document.getElementById("resultado-juego");

btnAdivinar.addEventListener("click", function () {
  const numeroUsuario = parseInt(inputNumero.value, 10);

 
  if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 10) {
    resultadoJuego.style.color = "#dc2626";
    resultadoJuego.textContent = "Por favor ingresa un número válido del 1 al 10.";
    return;
  }

  intentos = intentos + 1;

  
  if (numeroUsuario === numeroSecreto) {
    resultadoJuego.style.color = "#16a34a";
    resultadoJuego.textContent = `¡Correcto! Adivinaste el ${numeroSecreto} en ${intentos} intento(s). ¡Se ha generado uno nuevo!`;
  
    numeroSecreto = Math.floor(Math.random() * 10) + 1;
    intentos = 0;
    inputNumero.value = "";
  } else if (numeroUsuario < numeroSecreto) {
    resultadoJuego.style.color = "#ea580c";
    resultadoJuego.textContent = "El número secreto es MAYOR. Intenta de nuevo.";
  } else {
    resultadoJuego.style.color = "#ea580c";
    resultadoJuego.textContent = "El número secreto es MENOR. Intenta de nuevo.";
  }
});



const botonSubir = document.getElementById("btn-subir");


window.addEventListener("scroll", function () {
  if (window.scrollY > 250) {
    botonSubir.classList.add("visible");
  } else {
    botonSubir.classList.remove("visible");
  }
});


botonSubir.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
