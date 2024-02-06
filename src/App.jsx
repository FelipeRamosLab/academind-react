import { useState } from 'react';
import GameBoard from './components/GameBoard';
import Player from './components/Player';
import Log from './components/Log';

function App() {
  const [ gameTurns, setGameTurns ] = useState([]);
  const [ activePlayer, setActivePlayer ] = useState('X');

  function handleSelectedSquare() {
    setActivePlayer(prev => prev === 'X' ? 'O' : 'X');
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={activePlayer === 'X'} />
          <Player name="Player 2" symbol="O" isActive={activePlayer === 'O'} />
        </ol>

        <GameBoard onSelectSquare={handleSelectedSquare} activePlayer={activePlayer} />
      </div>

      <Log />
    </main>
  )
}

export default App
