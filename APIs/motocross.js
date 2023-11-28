let tablaParticipantesVisible=true;
function listaJugadores() {
  fetch('https://www.thesportsdb.com/api/v1/json/3/eventresults.php?id=652890')
    .then(response => response.json())
    .then(data => {
      const eventos = data.results;
      const contenedor = document.getElementById('escritura');
      const tabla = document.createElement('table');

      // Crear fila de encabezado
      const encabezado = document.createElement('tr');

      // Crear celda de "Participante"
      const celdaParticipante = document.createElement('th');
      celdaParticipante.textContent = "Participante";
      encabezado.appendChild(celdaParticipante);

      // Crear celda de "Puntaje"
      const celdaPuntaje = document.createElement('th');
      celdaPuntaje.textContent = "Puntaje";
      encabezado.appendChild(celdaPuntaje);

      // Crear celda de "Posición"
      const celdaPosicion = document.createElement('th');
      celdaPosicion.textContent = "Posición";
      encabezado.appendChild(celdaPosicion);

      // Agregar fila de encabezado a la tabla
      tabla.appendChild(encabezado);

      // Recorrer los eventos y agregar filas de datos a la tabla
      for (let i = 0; i < eventos.length; i++) {
        const fila = document.createElement('tr');

        const celdaNombre = document.createElement('td');
        celdaNombre.textContent = eventos[i].strPlayer;
        fila.appendChild(celdaNombre);

        const celdaPuntaje = document.createElement('td');
        celdaPuntaje.textContent = eventos[i].intPoints;
        fila.appendChild(celdaPuntaje);

        const celdaPosicion = document.createElement('td');
        celdaPosicion.textContent = eventos[i].intPosition;
        fila.appendChild(celdaPosicion);

        tabla.appendChild(fila);
      }

      tabla.style.width = '40%';
      tabla.style.margin = '0 auto';
      tabla.style.borderCollapse = 'collapse';

      if (tablaParticipantesVisible) {
        contenedor.innerHTML= '';
        
      } else {
        contenedor.innerHTML= '';
        contenedor.appendChild(tabla)
      }
  
      tablaParticipantesVisible = !tablaParticipantesVisible;

    })
    .catch(e => console.log(e));
}


document.getElementById('participantes').addEventListener('click', listaJugadores);
document.getElementById('flecha-participantes').addEventListener('click', listaJugadores);

function paisesParticipantes (){
  fetch('https://www.thesportsdb.com/api/v1/json/3/eventresults.php?id=652890')
  .then(response => response.json())
  .then(data => {
    const eventos = data.results;
    const contenedor = document.getElementById('escritura');
    const tabla = document.createElement('table');

    // Crear fila de encabezado
    const encabezado = document.createElement('tr');

    // Crear celda de "Participante"
    const celdaParticipante = document.createElement('th');
    celdaParticipante.textContent = "Participante";
    encabezado.appendChild(celdaParticipante);

    // Crear celda de "País"
    const celdaPais = document.createElement('th');
    celdaPais.textContent = "País";
    encabezado.appendChild(celdaPais);

    // Agregar fila de encabezado a la tabla
    tabla.appendChild(encabezado);

    // Recorrer los eventos y agregar filas de datos a la tabla
    for (let i = 0; i < eventos.length; i++) {
      const fila = document.createElement('tr');

      const celdaNombre = document.createElement('td');
      celdaNombre.textContent = eventos[i].strPlayer;
      fila.appendChild(celdaNombre);

      const celdaPais = document.createElement('td');
      celdaPais.textContent = eventos[i].strCountry;
      fila.appendChild(celdaPais);

      tabla.appendChild(fila);
    }

    tabla.style.width = '40%';
    tabla.style.margin = '0 auto';
    tabla.style.borderCollapse = 'collapse';

    if (tablaParticipantesVisible) {
      contenedor.innerHTML= '';
      
    } else {
      contenedor.innerHTML= '';
      contenedor.appendChild(tabla)
    }

    tablaParticipantesVisible = !tablaParticipantesVisible;
  })
  .catch(e => console.log(e));
}

  document.getElementById('paises').addEventListener('click', paisesParticipantes)
  document.getElementById('flecha-paises').addEventListener('click', paisesParticipantes)