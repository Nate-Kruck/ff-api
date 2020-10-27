import React from 'react';
import PropTypes from 'prop-types';
import Player from '../player/player';

const PlayerList = ({ players }) => {
  const playerElements = players.map(player => (
    <li key={`${player.playerId}-${player.team}`}>
      <Player {...player} />
    </li>
  ));

  return (
    <ul data-testid="players">
      {playerElements}
    </ul>
  );
};

PlayerList.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({
    active: PropTypes.string.isRequired,
    fname: PropTypes.string.isRequired,
    lname: PropTypes.string.isRequired,
    team: PropTypes.string.isRequired
  })).isRequired
};

export default PlayerList;

