// Agrega un evento 'load' al objeto 'window'
window.addEventListener("load", function () {
  // Llama a la función para realizar la validación después de que la página se ha cargado
  validarHorario();
});

function validarHorario() {
  const horaActual = new Date().getHours();
  const mensajeElement = document.getElementById("mensaje");
  const horarioAperturaElement = document.getElementById("horarioApertura");

  if (horaActual >= 11 && horaActual < 21) {
    // El local está abierto
    mensajeElement.textContent = "> Abierto <";
    mensajeElement.style.color = "limegreen"; // Texto en verde

    // Ocultar el mensaje de horario de apertura si estaba visible
    horarioAperturaElement.style.display = "none";
  } else {
    // El local está cerrado
    mensajeElement.textContent = "> Cerrado <";
    mensajeElement.style.color = "red"; // Texto en rojo

    // Mostrar el mensaje de horario de apertura
    horarioAperturaElement.textContent = "Abre a las 11:00 a.m.";
    horarioAperturaElement.style.display = "block";
    horarioAperturaElement.style.color = "white";
    horarioAperturaElement.style.borderBottom = "1px solid";
  }
}

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  }
};
navToggleEvent(navElemArr);
navToggleEvent(navLinks);

const goTopBtn = document.querySelector("[data-go-top]");
window.addEventListener("scroll", function () {
  if (window.scrollY >= 200) {
    goTopBtn.classList.add("active");
  } else {
    goTopBtn.classList.remove("active");
  }
});

function agregarPuntosResponsivos() {
  const contenedores = document.querySelectorAll(".list-plato");

  contenedores.forEach((contenedor) => {
    const nombrePlatillo =
      contenedor.querySelector("h4:first-child").textContent;
    const precioPlatillo =
      contenedor.querySelector("h4:last-child").textContent;

    const espacioDisponible =
      contenedor.clientWidth - nombrePlatillo.length - precioPlatillo.length;

    // Verificar si el contenedor tiene el id "plato-detalle"
    if (!contenedor.id || contenedor.id !== "plato-detalle") {
      if (espacioDisponible > 0) {
        const puntos = ".".repeat(espacioDisponible);
        contenedor.querySelector("span").textContent = puntos;
      } else {
        contenedor.querySelector("span").textContent = "";
      }
    } else {
      // Si tiene el id "plato-detalle", no hacemos nada (no agregamos puntos)
      contenedor.querySelector("span").textContent = "";
    }
  });
}

// Llama a la función al cargar la página y cuando cambie el tamaño de la ventana
window.addEventListener("load", agregarPuntosResponsivos);
window.addEventListener("resize", agregarPuntosResponsivos);
