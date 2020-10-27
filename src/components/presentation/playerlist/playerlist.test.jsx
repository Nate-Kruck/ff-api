import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PlayerList from './playerlist';
import { getPlayers } from '../../../services/ff-api';

jest.mock('../../../services/ff-api.js');

describe('playerlist component', () => {
  it('displays a list of NFL players', async() => {
    getPlayers.mockResolvedValue([
      { playerId: '1', active: '1', fname: 'Tom', lname: 'Brady', team: 'TB' }
    ]);
    render(<MemoryRouter>
      <PlayerList />
    </MemoryRouter>);

    screen.getByText('...Loading');

    const playerList = await screen.findByTestId('players');

    return waitFor(() => {
      expect(playerList).not.toBeEmptyDOMElement();
    });
  });
});
