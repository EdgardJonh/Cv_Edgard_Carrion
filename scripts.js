// Array de habilidades con nombres y porcentajes
const habilidades = [
    { nombre: "Aplicaciones SPA", porcentaje: 50 },
    { nombre: "Programación orientada a objetos y componentes", porcentaje: 60 },
    { nombre: "Dominio de Inglés", porcentaje: 40 },
    { nombre: "Consumo de APIs", porcentaje: 50 },
    { nombre: "PHP", porcentaje: 50},
    { nombre: "Laravel", porcentaje: 40 },
    { nombre: "JavaScript", porcentaje: 70 },
    { nombre: "React.js", porcentaje: 60 },
    { nombre: "Vue.js", porcentaje: 60 },
    { nombre: "SASS", porcentaje: 20 },
    { nombre: "Bootstrap", porcentaje: 70 },
    { nombre: "Control de Versiones Git", porcentaje: 50 },
    { nombre: "GitHub", porcentaje: 80 },

  ];
  
  // Selecciona el contenedor donde se insertarán las secciones
  const contenedorHabilidades = document.querySelector('.contenedor-habilidades'); // Asegúrate de tener un contenedor con esta clase en tu HTML
  
  // Genera las secciones de habilidades de forma dinámica
  habilidades.forEach(habilidad => {
    const divRow = document.createElement('div');
    divRow.className = 'row con2 colorc2';
  
    const colHabilidad = `
      <div class="col-6 d-flex align-self-center flex-column">
        <p class="habilidad">${habilidad.nombre}</p>
      </div>
      <div class="col-6 d-flex align-self-center flex-column">
        <div class="progress">
          <div class="progress-bar bg-secondary" role="progressbar" style="width: ${habilidad.porcentaje}%" aria-valuenow="${habilidad.porcentaje}" aria-valuemin="0" aria-valuemax="100">${habilidad.porcentaje}%</div>
        </div>
      </div>
    `;
  
    divRow.innerHTML = colHabilidad;
    contenedorHabilidades.appendChild(divRow);
  });
  



  // Array de formaciones con detalles
const formaciones = [
    { titulo: "Bootcamp Front End, Edutecno.", anio: "2023" },
    { titulo: "Bootcamp FullStack JS, Desafio Latam", anio: "2024" },
    { titulo: "Bootcamp FullStack Python, Edutecno", anio: "2024" },
    { titulo: "Ingeniería de Ejecución en Informática Mención Desarrollo de Sistemas, Titulado.", anio: "2018-2019" },
    { titulo: "Analista Programador de Sistemas, Titulado.", anio: "2014-2016" }
  ];
  
  // Selecciona el contenedor donde se insertará la sección de formación
  const contenedorFormacion = document.querySelector('.contenedor-formacion'); // Asegúrate de tener un contenedor con esta clase en tu HTML
  
  // Crea el contenedor principal de la sección de formación
  const divColumna = document.createElement('div');
  divColumna.className = 'col-sm con2 colorc2';
  
  // Agrega el encabezado y la línea horizontal
  divColumna.innerHTML = `
    <h4 class="textoColor">FORMACIÓN</h4>
    <hr class="hrr2">
  `;
  
  // Genera las secciones de formación de forma dinámica
  formaciones.forEach(formacion => {
    const divFormacion = document.createElement('div');
    divFormacion.className = 'col-sm con2 colorc2';
  
    divFormacion.innerHTML = `
      <h6>${formacion.titulo} <span>${formacion.anio}</span></h6>
    `;
  
    divColumna.appendChild(divFormacion);
  });
  
  // Agrega la sección completa al contenedor principal
  contenedorFormacion.appendChild(divColumna);
  



  // Array de tecnologías o experiencias en FrontEnd
const experiencias = [
    "JavaScript",
    "Node.js",
    "Vue.js",
    "React.js",
    "Python Django",
    "HTML5",
    "CSS, flexbox, grid",
    "Bootstrap",
    "Preprocesadores, SASS"
  ];
  
  // Selecciona el contenedor donde se insertará la sección de experiencia
  const contenedorExperiencia = document.querySelector('.contenedor-experiencia'); // Asegúrate de tener un contenedor con esta clase en tu HTML
  
  // Crea el contenedor principal de la sección de experiencia
  const divExperiencia = document.createElement('div');
  divExperiencia.className = 'col-sm con2 colorc2';
  
  // Agrega el encabezado de la sección
  divExperiencia.innerHTML = `
    <h5>Desarrollo FrontEnd y BackEnd</h5>
  `;
  
  // Genera los elementos `<p>` para cada experiencia
  experiencias.forEach(experiencia => {
    const pElement = document.createElement('p');
    pElement.textContent = experiencia;
    divExperiencia.appendChild(pElement);
  });
  
  // Agrega la sección completa al contenedor principal
  contenedorExperiencia.appendChild(divExperiencia);
  



  // Array de proyectos con título y enlace
const proyectos = [
    { titulo: "Opinión de Video Juegos", enlace: "https://edgardjonh.github.io/proyecto_opinion_juegos_produccion/" },
    { titulo: "Administración de cursos online", enlace: "https://edgardjonh.github.io/practica_consolidacion7_produccion/" },
    {titulo: "Proyecto CRUD Django(Produccion Render)",enlace:"https://proyecto-crud-django.onrender.com"},
    {titulo: "Proyecto Pizzeria MamaMia!",enlace:"https://lapizza-mama.netlify.app/"}
  ];
  
  // Selecciona el contenedor donde se insertará la sección de proyectos
  const contenedorProyectos = document.querySelector('.contenedor-proyectos'); // Asegúrate de tener un contenedor con esta clase en tu HTML
  
  // Crea el contenedor principal de la sección de proyectos
  const divProyectos = document.createElement('div');
  divProyectos.className = 'col-sm con2 colorc2';
  
  // Agrega el encabezado de la sección
  divProyectos.innerHTML = `
    <h5>Proyectos</h5>
  `;
  
  // Genera los elementos `<a>` para cada proyecto
  proyectos.forEach(proyecto => {
    const aElement = document.createElement('a');
    aElement.href = proyecto.enlace;
    aElement.style.textDecoration = 'none'
    aElement.textContent = proyecto.titulo;
    aElement.target = "_blank"; // Para abrir en una nueva pestaña
    divProyectos.appendChild(aElement);
  
    // Agrega un salto de línea después de cada enlace
    divProyectos.appendChild(document.createElement('br'));
  });
  
  // Agrega la sección completa al contenedor principal
  contenedorProyectos.appendChild(divProyectos);
  