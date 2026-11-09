const replies = {
  inscripcion: `
    <h3>📝 Inscripciones</h3>
    <p><b>Fecha referencial:</b> enero. La fecha exacta y el cronograma deben confirmarse en los avisos oficiales de la unidad educativa para cada gestión.</p>
    <h4>Documentación indicada por la unidad educativa</h4>
    <ol>
      <li>Fotocopia del carnet de identidad del estudiante.</li>
      <li>Fotocopia del carnet de identidad del padre, madre o tutor.</li>
      <li>Certificado de nacimiento del estudiante.</li>
    </ol>
    <h4>Pasos para la inscripción</h4>
    <ol>
      <li>Preparar las dos fotocopias de carnet y el certificado de nacimiento.</li>
      <li>Colocar los documentos en un folder.</li>
      <li>Presentar el folder en la Unidad Educativa 25 de Mayo para realizar el trámite.</li>
    </ol>
    <h4>Reinscripción de estudiantes antiguos</h4>
    <p>Los estudiantes antiguos deben acudir a la unidad educativa para revisar y actualizar sus datos del RUDE cuando corresponda. El padre, madre o tutor debe comprobar que toda la información esté correcta.</p>
    <p class="note">La lista anterior refleja la información proporcionada para esta aplicación. Si el Ministerio o la dirección educativa publica requisitos adicionales para una gestión, prevalece el cronograma oficial.</p>
  `,
  rude: `
    <h3>📄 RUDE: Registro Único de Estudiantes</h3>
    <p>El RUDE es el <b>Registro Único de Estudiantes</b> de Bolivia. Permite registrar e identificar al estudiante y mantener información educativa actualizada para el Sistema de Información Educativa.</p>
    <h4>¿Para qué sirve?</h4>
    <ul>
      <li>Registrar los datos personales y educativos del estudiante.</li>
      <li>Apoyar el registro de matrícula y el seguimiento educativo.</li>
      <li>Contar con información oficial para la planificación educativa.</li>
    </ul>
    <h4>¿Quién llena los datos?</h4>
    <p>El padre, madre o tutor llena el formulario con información correcta. Algunos campos administrativos son completados por la unidad educativa. El formulario impreso debe revisarse y firmarse según las indicaciones oficiales.</p>
    <h4>¿Qué información conviene tener a mano?</h4>
    <ul>
      <li>Nombre completo y fecha de nacimiento del estudiante.</li>
      <li>Certificado de nacimiento y carnet de identidad del estudiante, según corresponda.</li>
      <li>Datos de identidad y contacto del padre, madre o tutor.</li>
      <li>Dirección actual y datos solicitados en el formulario vigente.</li>
    </ul>
    <h4>¿Cómo llenarlo?</h4>
    <ol>
      <li>Solicita o abre el formulario RUDE vigente para la gestión.</li>
      <li>Lee cada campo y copia los datos tal como aparecen en los documentos.</li>
      <li>Revisa nombres, fechas, números y dirección antes de firmar.</li>
      <li>Completa solo la información que corresponda; no inventes datos. Si un campo no se entiende, pide aclaración en la unidad educativa durante el trámite.</li>
      <li>Entrega el formulario según las indicaciones del colegio y conserva una copia si te la proporcionan.</li>
    </ol>
    <p><b>Importante:</b> el registro o actualización del RUDE no debe confundirse con llenar un formulario cualquiera por internet. Usa el formulario oficial de la gestión actual y sigue las instrucciones del Ministerio de Educación.</p>
    <p><a class="inline-link" href="https://www.minedu.gob.bo/index.php?Itemid=933&catid=93&id=8255&option=com_content&view=article" target="_blank" rel="noopener noreferrer">Consultar formulario RUDE oficial del Ministerio de Educación ↗</a></p>
  `,
  bono: `
    <h3>🎓 Bono Juancito Pinto</h3>
    <p>El Bono Juancito Pinto es un incentivo educativo sujeto a las disposiciones oficiales de cada gestión. El padre, madre o tutor debe revisar los requisitos vigentes y realizar el cobro por la modalidad anunciada oficialmente.</p>
    <h4>Preparación de la nota para acompañar la fotocopia de carnet</h4>
    <p>Según la indicación proporcionada para esta aplicación, prepara una fotocopia del carnet de identidad del padre, madre o tutor que corresponda y escribe en ella, de forma legible:</p>
    <div class="sample">
      <p><b>SOY PADRE/MADRE/TUTOR DEL ESTUDIANTE:</b> __________________________</p>
      <p><b>CURSO DEL ESTUDIANTE:</b> __________________________</p>
      <p><b>NOMBRE DEL PADRE/MADRE/TUTOR:</b> __________________________</p>
      <p><b>NÚMERO DE CELULAR:</b> __________________________</p>
      <p><b>FIRMA:</b> __________________________</p>
    </div>
    <p>La fotocopia y esta nota son una orientación para preparar la documentación solicitada localmente; no sustituyen los requisitos oficiales de cobro. La modalidad, los documentos aceptados y quién puede cobrar deben verificarse en el anuncio oficial de la gestión correspondiente.</p>
  `,
  horarios: `
    <h3>🕗 Horarios</h3>
    <h4>Horario de atención informado</h4>
    <p><b>De 8:00 a. m. a 12:00 p. m.</b></p>
    <h4>Turnos y horarios de clases</h4>
    <p>Los turnos, la hora de entrada y la hora de salida de cada programa aún no están confirmados para esta aplicación. Se publicarán cuando la unidad educativa proporcione los horarios oficiales, para evitar dar información equivocada.</p>
  `,
  ubicacion: `
    <h3>📍 Ubicación de la Unidad Educativa 25 de Mayo</h3>
    <p>La referencia compartida para ubicar el colegio es la zona del Hospital Juan XXIII, en La Paz, Bolivia.</p>
    <p><a class="map-link" href="https://maps.app.goo.gl/3cigYon4AWkFXPC1A" target="_blank" rel="noopener noreferrer">📍 Abrir ubicación exacta en Google Maps</a></p>
    <p>Cuando se abra el mapa, puedes consultar la ruta desde tu ubicación y seguir las indicaciones de Google Maps.</p>
  `,
  academica: `
    <h3>📚 Información académica</h3>
    <p>La información proporcionada para esta sección menciona los siguientes programas:</p>
    <ul>
      <li><b>Secretariado Ejecutivo</b></li>
      <li><b>Mecánica Automotriz</b></li>
    </ul>
    <p>El nivel, la duración, los requisitos de ingreso y la denominación oficial de cada programa deben confirmarse con la información académica oficial de la institución antes de publicarlos como datos definitivos.</p>
  `
};

const answer = document.getElementById("answer");
document.querySelectorAll("[data-topic]").forEach(button => {
  button.addEventListener("click", () => {
    answer.innerHTML = replies[button.dataset.topic] || "<p>Selecciona una opción del menú.</p>";
    answer.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
});
