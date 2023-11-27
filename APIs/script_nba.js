const playerIds = [57, 237, 140, 132, 145,434,79,115,15,246];

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "7bafb22023mshcdabcc00d3bd256p17b6a4jsnbf5a1f132a3c",
    "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
  },
};

async function fetchTopPlayers() {
  const tableBody = document.getElementById("topPlayersTableBody");

  for (const playerId of playerIds) {
    const url = `https://free-nba.p.rapidapi.com/players/${playerId}`;

    try {
      /* El código `const respuesta = await fetch(url, opciones);` envía una solicitud GET a la URL
      especificada con las opciones proporcionadas. Devuelve una promesa que se resuelve con la
      respuesta del servidor. */
      const response = await fetch(url, options);
      const result = await response.json();

      console.log(result);

      /* La línea `const playerRow = document.createElement(&quot;tr&quot;);` está creando un nuevo
      elemento de fila de tabla HTML (`<tr> `) y asignándolo a la variable `playerRow`. Este
      elemento se utilizará para representar una fila en la tabla que muestra a los mejores
      jugadores. */
      const playerRow = document.createElement("tr");

      const {
        id,
        first_name,
        last_name,
        height_feet,
        height_inches,
        position,
        team,
        weight_pounds,
      } = result;

      /* La matriz de "celdas" crea una matriz de objetos, donde cada objeto representa una celda en la
  fila de la tabla. Cada objeto tiene una propiedad "texto" que contiene el valor que se mostrará en
  la celda. */
      const cells = [
        { text: id },
        { text: first_name },
        { text: last_name },
        { text: `${height_feet}' ${height_inches}"` },
        { text: position },
        { text: team.full_name },
        { text: `${weight_pounds} lbs` },
      ];

      /* se itera sobre cada objeto en la matriz `celdas` y
      creando una nueva celda de tabla (`<td> `) elemento para cada objeto. */
      cells.forEach((cell) => {
        const cellElement = document.createElement("td");
        cellElement.textContent = cell.text;
        playerRow.appendChild(cellElement);
      });

      /* `tableBody.appendChild(playerRow);` está agregando el elemento `playerRow` (que representa una
      fila en la tabla) como elemento secundario del elemento `tableBody`. Esto significa que
      `playerRow` se agregará al final de las filas existentes en la tabla. */
      tableBody.appendChild(playerRow);
    } catch (error) {
      console.error(error);
    }
  }
}

fetchTopPlayers();

//script para estadisticas
