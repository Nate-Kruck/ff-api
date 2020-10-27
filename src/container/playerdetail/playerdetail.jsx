import React from 'react';
import { useParams } from 'react-router-dom';
import { AllPlayers } from '../playerroster/playerroster';

const PlayerDetail = () => {
  const { playerId } = useParams();
  const { loading, player } = AllPlayers(playerId);
  if(loading) return <h1>Loading...</h1>;
  

  return (
    <>
      <p>{player.fname} {player.lname}</p>
      <p>{player.team}</p>
    </>
  );
};

export default PlayerDetail;
