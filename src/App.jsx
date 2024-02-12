import { useState } from 'react';
import GameBoard from './components/GameBoard';
import Player from './components/Player';
import Log from './components/Log';
import { WINNING_COMBINATIONS } from './winning-combinations';

function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';

  if (gameTurns.length && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }

  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  // const [activePlayer, setActivePlayer] = useState('X');
  const activePlayer = deriveActivePlayer(gameTurns);

  function handleSelectedSquare(rowIndex, colIndex) {
    // setActivePlayer(prev => prev === 'X' ? 'O' : 'X');
    setGameTurns(prev => {
      const currentPlayer = deriveActivePlayer(prev);
      const update = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prev
      ];

      return update;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={activePlayer === 'X'} />
          <Player name="Player 2" symbol="O" isActive={activePlayer === 'O'} />
        </ol>

        <GameBoard onSelectSquare={handleSelectedSquare} turns={gameTurns} />
      </div>

      <Log turns={gameTurns} />
    </main>
  )
}

export default App
