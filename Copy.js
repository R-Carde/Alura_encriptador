// Botón para copiar el resultado
const copyButton = document.getElementById("copyButton");
copyButton.addEventListener("click", () => {
  const outputText = document.getElementById("outputText");
  
  // Selecciona el contenido del campo de texto
  outputText.select();
  outputText.setSelectionRange(0, 99999); // Para dispositivos móviles

  // Copia el contenido al portapapeles
  document.execCommand("copy");

  // Deselecciona el texto
  window.getSelection().removeAllRanges();

  // Puedes agregar un mensaje de retroalimentación
  alert("¡Contenido copiado al portapapeles!");
});