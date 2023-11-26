document.getElementById('participantes').addEventListener('click', function() {
    const url = 'https://www.thesportsdb.com/api/v1/json/3/eventresults.php?id=652890';
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const eventos = data.results;
        const contenedor = document.getElementById('escritura');
        const tabla = document.createElement('table');
        let contadorColumnas = 0;
        let filaActual;
  
        for (let i = 0; i < eventos.length; i++) {
          if (contadorColumnas === 0) {
            filaActual = document.createElement('tr');
          }
  
          const celda = document.createElement('td');
          celda.textContent = eventos[i].strPlayer;
          filaActual.appendChild(celda);
  
          contadorColumnas++;
  
          if (contadorColumnas === 3 || i === eventos.length - 1) {
            tabla.appendChild(filaActual);
            contadorColumnas = 0;
          }
        }
  
        tabla.style.width = '60%';
        tabla.style.margin = '0 auto';
  
        contenedor.innerHTML = ''; // Limpiar el contenido actual
        contenedor.appendChild(tabla);
      })
      .catch(e => console.log(e));
  });
  
  document.getElementById('otra-cosa').addEventListener('click', function() {
    const prueba = 'Prueba';
    const contenedor = document.getElementById('escritura');
  
    // Ocultar la información de la primera función
    contenedor.innerHTML = '';
  
    // Mostrar la información de la segunda función
    contenedor.style.textAlign = 'center';
    contenedor.textContent = prueba;
  });