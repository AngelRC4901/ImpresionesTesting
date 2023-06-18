function menu() {
  window.location.href = "../index.html";
}

function submitForm() {
  var allInput = document.querySelectorAll('.first input, .first select');
  var isFormValid = true;

  allInput.forEach(function (input) {
    if (input.value === '' || input.value === 'Selecciona genero' || input.value === 'Lugar de Nacimiento') {
      isFormValid = false;
      return;
    }
  });

  if (isFormValid) {
    guardarActa(), obtenerCURP();
  }
}

function submitFormCURP() {
  var allInput = document.querySelectorAll('.first input, .first select');
  var isFormValid = true;

  allInput.forEach(function (input) {
    if (input.value === '' || input.value === 'Selecciona genero' || input.value === 'Lugar de Nacimiento') {
      isFormValid = false;
      return;
    }
  });

  if (isFormValid) {
    obtenerCURP();
  }
}

function submitFormConstanciaEstudios() {
  var allInput = document.querySelectorAll('.first input, .first select');
  var isFormValid = true;

  allInput.forEach(function (input) {
    if (input.value === '' || input.value === 'Selecciona genero' || input.value === 'Lugar de Nacimiento') {
      isFormValid = false;
      return;
    }
  });

  if (isFormValid) {
    obtenerConstanciaEstudios();
  }
}

function submitFormDiploma() {
  var nombresInput = document.getElementById('nombres');
  var apellidosInput = document.getElementById('apellidos');
  var cursoInput = document.getElementById('curso');

  var isFormValid = true;

  if (nombresInput.value === '') {
    isFormValid = false;
  }

  if (apellidosInput.value === '') {
    isFormValid = false;
  }

  if (cursoInput.value === '') {
    isFormValid = false;
  }

  if (isFormValid) {
    guardarDiploma();
  }
}

function submitFormRecibo() {
  var nombreInput = document.getElementById('nombre');
  var direccionInput = document.getElementById('direccion');
  var isFormValid = true;

  if (nombreInput.value === '') {
    isFormValid = false;
  }

  if (direccionInput.value === '') {
    isFormValid = false;
  }

  if (isFormValid) {
    // Realizar acciones adicionales o enviar el formulario
    guardarRecibo();
  } else {
    alert('El campo nombre es obligatorio');
  }
}


function guardarActa(curp) {
  localStorage.nombres = document.getElementById("nombre").value;
  localStorage.apellidoP = document.getElementById("apellidoPaterno").value;
  localStorage.apellidoM = document.getElementById("apellidoMaterno").value;
  localStorage.sexo = document.getElementById("genero").value;
  localStorage.fechaNacimiento = document.getElementById("fechaNacimiento").value;
  localStorage.Nacim = document.getElementById("estado").value;
  localStorage.curp = curp;
  localStorage.folio = folio();

  window.open("../ActaNacimiento/acta.html");
}

function guardarCURP(curp) {
  console.log(curp);
  localStorage.nombres = document.getElementById("nombre").value;
  localStorage.apellidoP = document.getElementById("apellidoPaterno").value;
  localStorage.apellidoM = document.getElementById("apellidoMaterno").value;
  localStorage.fechaNacimiento = document.getElementById("fechaNacimiento").value;
  localStorage.sexo = document.getElementById("genero").value;
  localStorage.lugarNacimiento = document.getElementById("estado").value;
  localStorage.curp = curp;

  window.open("../Curp/curp.html");
}

function guardarConstanciaEstudios(curp, carrera, id) {
  localStorage.nombres = document.getElementById("nombre").value;
  localStorage.apellidoP = document.getElementById("apellidoPaterno").value;
  localStorage.apellidoM = document.getElementById("apellidoMaterno").value;
  localStorage.fechaNacimiento = document.getElementById("fechaNacimiento").value;
  localStorage.sexo = document.getElementById("genero").value;
  localStorage.lugarNacimiento = document.getElementById("estado").value;
  localStorage.curp = curp;
  localStorage.carrera = carrera;
  localStorage.id = id;

  window.open("../Constancia/constanciaEstudios.html");
}

function guardarDiploma() {
  localStorage.nombres = document.getElementById("nombres").value;
  localStorage.apellidos = document.getElementById("apellidos").value;
  localStorage.curso = document.getElementById("curso").value;
  window.open("../Diploma/diploma.html")
}

function guardarRecibo() {
  localStorage.nombres = document.getElementById("nombre").value;
  localStorage.direccion = document.getElementById("direccion").value;

  window.open("../Recibo/recibo.html")
}

window.onload = function () {
  const d = new Date();
  const m = new Date();
  const a = new Date();

  var canvas = document.getElementById("lienzo");

  var canvasCURP = document.getElementById("lienzoCURP");

  var canvasDiploma = document.getElementById("lienzoDiploma");

  var canvasRecibo = document.getElementById("lienzoRecibo");

  var canvasConstanciaEstudios = document.getElementById("lienzoConstanciaEstudios");

  if (canvas && canvas.getContext) {
    var ctx = canvas.getContext("2d");

    if (ctx) {
      ctx.beginPath();

      ctx.fillStyle = "white";
      ctx.fillRect(75, 47, 90, 18);
      ctx.font = "14pt Times New Roman";
      ctx.fillStyle = "red";
      ctx.fillText(localStorage.folio = folio().join(''), 80, 62);

      ctx.font = "14pt Times New Roman";
      ctx.fillStyle = "black";
      ctx.fillText(localStorage.curp, 570, 142);

      ctx.font = "14pt Times New Roman";
      ctx.fillStyle = "black";
      ctx.fillText(localStorage.folio = folio().join(''), 597, 191);

      ctx.font = "14pt Times New Roman";
      ctx.fillStyle = "black";
      ctx.fillText("Mexico", 605, 230);

      ctx.font = "14pt Times New Roman";
      ctx.fillStyle = "black";
      ctx.fillText("Mexico", 605, 268);

      ctx.font = "14pt Times New Roman";
      ctx.fillStyle = "black";
      ctx.fillText(localStorage.nombres, 100, 370);

      ctx.font = "14pt Times New Roman";
      ctx.fillStyle = "black";
      ctx.fillText(localStorage.apellidoP, 370, 370);

      ctx.font = "14pt Times New Roman";
      ctx.fillStyle = "black";
      ctx.fillText(localStorage.apellidoM, 620, 370);

      ctx.font = "14pt Times New Roman";
      ctx.fillStyle = "black";
      ctx.fillText(localStorage.sexo, 100, 430);

      ctx.font = "14pt Times New Roman";
      ctx.fillStyle = "black";
      ctx.fillText(localStorage.fechaNacimiento, 350, 430);

      ctx.font = "14pt Times New Roman";
      ctx.fillStyle = "black";
      ctx.fillText(localStorage.Nacim, 580, 430);

      var imag2 = new Image();
      imag2.src = "../img/firma.png";
      imag2.onload = function () {
        ctx.drawImage(imag2, 497, 825, 180, 150);
      };
    }
  }

  if (canvasCURP && canvasCURP.getContext) {
    var ctx = canvasCURP.getContext("2d");
    if (ctx) {
      ctx.beginPath();

      ctx.fillStyle = "white";
      ctx.fillRect(224, 188, 240, 25);
      ctx.font = "bold 18pt Times New Roman";
      ctx.fillStyle = "black";
      ctx.fillText(localStorage.curp, 230, 210);

      ctx.fillStyle = "white";
      ctx.fillRect(230, 250, 350, 25);
      ctx.font = "18pt Times New Roman";
      ctx.fillStyle = "black";
      ctx.fillText(localStorage.nombres, 230, 270);

      ctx.font = "18pt Times New Roman";
      ctx.fillStyle = "black";
      ctx.fillText(localStorage.apellidoP, 430, 270);

      ctx.font = "18pt Times New Roman";
      ctx.fillStyle = "black";
      ctx.fillText(localStorage.apellidoM, 540, 270);


      ctx.fillStyle = "white";
      ctx.fillRect(213, 340, 105, 15);
      ctx.font = "bold 12pt Times New Roman";
      ctx.fillStyle = "black";
      ctx.fillText(localStorage.fechaNacimiento, 213, 353);

      ctx.fillStyle = "white";
      ctx.fillRect(380, 340, 70, 15);
      ctx.font = "bold 12pt Times New Roman";
      ctx.fillStyle = "black";
      ctx.fillText(localStorage.folio = folio().join(''), 380, 354);

      ctx.fillStyle = "white";
      ctx.fillRect(500, 340, 130, 15);
      ctx.font = "bold 12pt Times New Roman";
      ctx.fillStyle = "black";
      ctx.fillText(localStorage.lugarNacimiento, 500, 353);

      ctx.fillStyle = "white";
      ctx.fillRect(20, 495, 172, 15);
      ctx.font = "bold 10pt Times New Roman";
      ctx.fillStyle = "black";
      ctx.fillText(localStorage.nombres, 30, 530);
      ctx.fillText(" :", 90, 530);
    }
  }

  if (canvasDiploma && canvasDiploma.getContext) {
    var ctx = canvasDiploma.getContext("2d");
    if (ctx) {
      ctx.beginPath();

      ctx.font = "25pt Times New Roman";
      ctx.fillStyle = "black";
      ctx.fillText("Universidad Autonoma de Aguascalientes", 140, 120);

      ctx.font = "30pt Times New Roman";
      ctx.fillStyle = "black";
      ctx.fillText("Otorga el siguiente DIPLOMA a:", 110, 200);

      ctx.font = "30pt Brush Script MT";
      ctx.fillStyle = "black";
      ctx.fillText(localStorage.nombres, 130, 270);

      ctx.font = "30pt Brush Script MT";
      ctx.fillStyle = "black";
      ctx.fillText(localStorage.apellidos, 410, 270);

      ctx.font = "30pt Times New Roman";
      ctx.fillStyle = "black";
      ctx.fillText("Por haber concluido el curso de " + localStorage.curso, 70, 330);

      ctx.font = "18pt Times New Roman";
      ctx.fillStyle = "black";
      ctx.fillText(d.getDate() + "/" + (m.getMonth() + 1) + "/" + a.getFullYear(), 600, 480);

      ctx.font = "17pt Times New Roman";
      ctx.fillStyle = "black";
      ctx.fillText("Alejandro Rivera Durón", 470, 435);

      var imag = new Image();
      imag.src = "../img/LOGO.png";
      imag.onload = function () {
        ctx.drawImage(imag, 40, 60, 100, 100);
      }

      var imag2 = new Image();
      imag2.src = "../img/firma.png";
      imag2.onload = function () {
        ctx.drawImage(imag2, 540, 335, 100, 100);
      }
    }
  }

  if (canvasRecibo && canvasRecibo.getContext) {
    var ctx = canvasRecibo.getContext("2d");
    if (ctx) {
      // Ajustar la escala del canvas
      var scaleRatio = 2; // Factor de escala, puedes ajustarlo según tus necesidades
      ctx.scale(scaleRatio, scaleRatio);

      ctx.beginPath();

      ctx.font = "4pt Verdana"; // Aumenta el tamaño de fuente y usa una fuente diferente
      ctx.fillStyle = "black";
      ctx.fillText(localStorage.nombres, 70, 8);
    }
  }

  if (canvasConstanciaEstudios && canvasConstanciaEstudios.getContext) {
    var ctx = canvasConstanciaEstudios.getContext("2d");

    if (ctx) {
      ctx.beginPath();

      ctx.fillStyle = "#B1B2B4";
      ctx.fillRect(218, 280, 350, 25);
      ctx.font = "14pt Times New Roman";
      ctx.fillStyle = "black";
      ctx.fillText(localStorage.nombres, 218, 300);

      ctx.font = "14pt Times New Roman";
      ctx.fillStyle = "black";
      ctx.fillText(localStorage.apellidoP, 400, 300);

      ctx.font = "14pt Times New Roman";
      ctx.fillStyle = "black";
      ctx.fillText(localStorage.apellidoM, 500, 300);

      ctx.fillStyle = "#B1B2B4";
      ctx.fillRect(218, 305, 200, 20);
      ctx.font = "14pt Times New Roman";
      ctx.fillStyle = "black";
      ctx.fillText(localStorage.curp, 218, 322);

      ctx.fillStyle = "#B1B2B4";
      ctx.fillRect(218, 325, 350, 20);
      ctx.font = "14pt Times New Roman";
      ctx.fillStyle = "black";
      ctx.fillText(localStorage.carrera, 218, 342);

      ctx.fillStyle = "#B1B2B4";
      ctx.fillRect(590, 252, 80, 19);
      ctx.font = "14pt Times New Roman";
      ctx.fillStyle = "black";
      ctx.fillText(localStorage.id, 590, 265);
    }

  }

};

// Función para generar la CURP
function generarCURP() {
  var nombre = document.getElementById("nombre").value.toUpperCase();
  var apellidoPaterno = document.getElementById("apellidoPaterno").value.toUpperCase();
  var apellidoMaterno = document.getElementById("apellidoMaterno").value.toUpperCase();
  var fechaNacimiento = document.getElementById("fechaNacimiento").value;
  var genero = sexo();
  var estado = claveEntidad();

  var anio = fechaNacimiento.substring(2, 4);
  var mes = fechaNacimiento.substring(5, 7).padStart(2, "0"); // Agrega un cero delante del mes si es menor que 10
  var dia = fechaNacimiento.substring(8, 10);

  var curp = apellidoPaterno.substring(0, 2) + apellidoMaterno.substring(0, 1) + nombre.substring(0, 1) + anio + mes + dia + genero + estado;

  return curp;
}

function generarCURPConstanciaEstudios() {
  var nombre = document.getElementById("nombre").value.toUpperCase();
  var apellidoPaterno = document.getElementById("apellidoPaterno").value.toUpperCase();
  var apellidoMaterno = document.getElementById("apellidoMaterno").value.toUpperCase();
  var fechaNacimiento = document.getElementById("fechaNacimiento").value;
  var genero = sexo();
  var estado = claveEntidad();

  var anio = fechaNacimiento.substring(2, 4);
  var mes = fechaNacimiento.substring(5, 7).padStart(2, "0"); // Agrega un cero delante del mes si es menor que 10
  var dia = fechaNacimiento.substring(8, 10);

  var curp = apellidoPaterno.substring(0, 2) + apellidoMaterno.substring(0, 1) + nombre.substring(0, 1) + anio + mes + dia + genero + estado;

  return curp;
}

// Obtener la CURP y mostrarla en HTML
function obtenerCURP() {
  var nombre = document.getElementById('nombre').value;
  var apellidoPaterno = document.getElementById('apellidoPaterno').value;
  var apellidoMaterno = document.getElementById('apellidoMaterno').value;
  var fechaNacimiento = new Date(document.getElementById('fechaNacimiento').value);
  var genero = document.getElementById('genero').value;
  var estado = document.getElementById('estado').value;

  var curp = generarCURP(nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento, genero, estado);

  guardarCURP(curp);
}

function obtenerConstanciaEstudios() {
  var nombre = document.getElementById('nombre').value;
  var apellidoPaterno = document.getElementById('apellidoPaterno').value;
  var apellidoMaterno = document.getElementById('apellidoMaterno').value;
  var fechaNacimiento = new Date(document.getElementById('fechaNacimiento').value);
  var genero = document.getElementById('genero').value;
  var estado = document.getElementById('estado').value;
  var carrera = document.getElementById('carrera').value;
  var id = document.getElementById('id').value;

  var curp = generarCURP(nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento, genero, estado);

  guardarConstanciaEstudios(curp, carrera, id);
}

//Funcion para cambiar los values del campo sexo
function sexo() {
  var sexo = document.getElementById('genero').value.toUpperCase();
  var genero = '';

  if (sexo == 'HOMBRE') {
    genero = 'H';
  } else if (sexo == 'MUJER') {
    genero = 'M';
  } else {
    genero = 'X';
  }

  return genero;
}

//Funcion para cambiar los values del campo estado
function claveEntidad() {
  var claveEntidad = document.getElementById('estado').value.toUpperCase();
  var clave = 0;

  switch (claveEntidad) {
    case 'AGUASCALIENTES':
      clave = 'AS';
      break;
    case 'BAJA CALIFORNIA':
      clave = 'BC';
      break;
    case 'BAJA CALIFORNIA SUR':
      clave = 'BS';
      break;
    case 'CAMPECHE':
      clave = 'CC';
      break;
    case 'COAHUILA':
      clave = 'CL';
      break;
    case 'COLIMA':
      clave = 'CM';
      break;
    case 'CHIAPAS':
      clave = 'CS';
      break;
    case 'CHIHUAHUA':
      clave = 'CH';
      break;
    case 'CIUDAD DE MEXICO':
      clave = 'DF';
      break;
    case 'DURANGO':
      clave = 'DG';
      break;
    case 'GUANAJUATO':
      clave = 'GT';
      break;
    case 'GUERRERO':
      clave = 'GR';
      break;
    case 'HIDALGO':
      clave = 'HG';
      break;
    case 'JALISCO':
      clave = 'JC';
      break;
    case 'MEXICO':
      clave = 'MC';
      break;
    case 'MICHOACAN':
      clave = 'MN';
      break;
    case 'MORELOS':
      clave = 'MS';
      break;
    case 'NAYARIT':
      clave = 'NT';
      break;
    case 'NUEVO LEON':
      clave = 'NL';
      break;
    case 'OAXACA':
      clave = 'OC';
      break;
    case 'PUEBLA':
      clave = 'PL';
      break;
    case 'QUERETARO':
      clave = 'QT';
      break;
    case 'QUINTANA ROO':
      clave = 'QR';
      break;
    case 'SAN LUIS POTOSI':
      clave = 'SP';
      break;
    case 'SINALOA':
      clave = 'SL';
      break;
    case 'SONORA':
      clave = 'SR';
      break;
    case 'TABASCO':
      clave = 'TC';
      break;
    case 'TAMAULIPAS':
      clave = 'TS';
      break;
    case 'TLAXCALA':
      clave = 'TL';
      break;
    case 'VERACRUZ':
      clave = 'VZ';
      break;
    case 'YUCATAN':
      clave = 'YN';
      break;
    case 'ZACATECAS':
      clave = 'ZS';
      break;
    default:
      clave = 'NE';
      break;
  }
  return clave;
}

//Funcion que genera el folio
function folio() {
  var numeros = [];

  for (var i = 0; i < 8; i++) {
    var numeroAleatorio = Math.floor(Math.random() * 10);
    numeros.push(numeroAleatorio);
  }
  return numeros;
}

function pago() {
  // Mostrar la primera SweetAlert con la animación de carga
  swal({
    title: 'Cargando...',
    text: 'Espere un momento',
    icon: 'info',
    buttons: false,
    closeOnClickOutside: false,
    closeOnEsc: false,
    timer: 2000, // Duración de la animación de carga (en milisegundos)
  }).then(() => {
    // Mostrar la segunda SweetAlert de éxito después de la animación de carga
    swal({
      title: 'Pago realizado con éxito',
      text: 'Puedes imprimir',
      icon: 'success',
      buttons: {
        imprimir: {
          text: 'IMPRIMIR',
          className: 'custom-print-button',
        },
      },
      buttonStyling: false,
    }).then(() => {
      // Mostrar la tercera SweetAlert después de hacer clic en el botón "Imprimir"
      swal('Impresión exitosa', 'La impresión se ha completado', 'success');
    });
  });
}
