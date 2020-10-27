import React, { useState, useEffect } from 'react';
import PlayerList from '../../components/presentation/playerlist/playerlist';
import { getPlayers } from  '../../services/ff-api';

const AllPlayers = () => {
  const [loading, setLoading] = useState(true);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    getPlayers()
      .then(players => setPlayers(players))
      .finally(() => setLoading(false));
  }, []);

  if(loading) return <h1 data-testid="loading">Loading...</h1>;

  return (
    <PlayerList players={players} />
  );
};

export default AllPlayers;
