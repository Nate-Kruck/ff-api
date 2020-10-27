import React from 'react';
import PropTypes from 'prop-types';

const Player = ({ active, fname, lname, team }) => (
  <>
    <h1>{fname} {lname} -- {team}</h1>
    <p>{active}</p>
  </>
);
  
Player.propTypes = {
  active: PropTypes.string.isRequired,
  fname: PropTypes.string.isRequired,
  lname: PropTypes.string.isRequired,
  team: PropTypes.string.isRequired
};
  
export default Player;
  
  
