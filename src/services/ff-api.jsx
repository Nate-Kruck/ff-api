export const getPlayers = () => {
  //eslint-disable-next-line max-len
  return fetch('https://cors-anywhere.herokuapp.com/https://www.fantasyfootballnerd.com/service/players/json/6b2arebitgc9/', {
    headers: {
      Origin: null
    }
  })
    .then(res => res.json())
    .then(json => json.Players.map(player => ({
      playerId: player.playerId,
      active: player.active,
      fname: player.fname,
      lname: player.lname,
      team: player.team
    })));
};
