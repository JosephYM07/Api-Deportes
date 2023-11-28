let team = document.querySelectorAll(".team");
      let player = document.querySelector(".players");
      let teamId = [2616, 2617, 2613, 2621, 3210];

      let key = "1f7e701d01e828808be1b95b20671d4e8fef21448cb7ad59fc853cb56845c903";

      function players(teamID, getEG) {
        fetch(
          `https://allsportsapi.com/api/football/?&met=Teams&teamId=${teamID}&APIkey=${key}`
        )
          .then((response) => response.json())
          .then((equipo) => {
            getEG(equipo.result[0].team_name, equipo.result[0].players);
          });
      }
      let texto;
      for (let i = 0; i < teamId.length; i++) {
        players(teamId[i], (team_name, players) => {
          team[i].innerHTML = team_name;
          team[i].addEventListener("click", () => {
            player.innerHTML = "<h1>Lista de Jugadores</h1>";
            for (const item of players) {
              console.log(players);
              let p = document.createElement("p");
              texto = document.createTextNode(item.player_name);
              p.appendChild(texto);
              player.appendChild(p);
            }
          });
        });
      }