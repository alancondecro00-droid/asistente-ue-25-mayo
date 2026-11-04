const replies = {
  inscripcion: "📝 INSCRIPCIONES\nPara conocer los requisitos, fechas y disponibilidad de plazas, comunícate con Secretaría al 73078292, de 8:00 a. m. a 12:00 p. m. La documentación y los plazos deben confirmarse directamente con el colegio.",
  rude: "📄 RUDE\nEl RUDE es el Registro Único de Estudiantes. Para consultas, actualización de datos o ayuda con el registro, comunícate con Secretaría al 73078292 en el horario de 8:00 a. m. a 12:00 p. m.",
  bono: "🎓 BONO JUANCITO PINTO\nLas fechas, requisitos y modalidad de entrega se anuncian oficialmente cada gestión. Para saber cómo se realizará la entrega en la unidad educativa, consulta con Secretaría al 73078292.",
  atencion: "☎️ ATENCIÓN AL CLIENTE\nPuedes comunicarte con:\n• Secretaría: 73078292\n• Regente: 77501340\n• Regenta: 69877397\nHorario: 8:00 a. m. a 12:00 p. m.\nToca uno de los números en la sección de contactos para llamar.",
  horarios: "🕗 HORARIOS DE ATENCIÓN\nLa atención indicada por la unidad educativa es de 8:00 a. m. a 12:00 p. m.",
  ubicacion: "📍 UBICACIÓN\nPuedes buscar la Unidad Educativa 25 de Mayo en Google Maps usando este enlace:\nhttps://www.google.com/maps/search/?api=1&query=Unidad+Educativa+25+de+Mayo+La+Paz+Bolivia"
};
document.querySelectorAll("[data-topic]").forEach(button => {
  button.addEventListener("click", () => {
    document.getElementById("answer").textContent = replies[button.dataset.topic];
  });
});