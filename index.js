console.log("Escribe tu nombre");
function actualizarTitulo(evento) {
    const titulo = document.getElementById("PRIMER PARCIAL");
    titulo.textContent = evento.target.value;
  }
  
  const input = document.getElementById("miInput");
  input.addEventListener("input", actualizarTitulo);
