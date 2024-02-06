import { useState } from 'react';

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard({ onSelectSquare, activePlayer }) {
    const [ gameBoard, setGameBoard ] = useState(initialGameBoard);

    function handleSelectSquare(rowIndex, colIndex) {
        setGameBoard(prev => {
            const updated = [...prev.map(inner => [...inner])];

            updated[rowIndex][colIndex] = activePlayer;
            return updated;
        });

        onSelectSquare();
    }

    return (<ol id="game-board">
        {gameBoard.map((row, ri) => <li key={ri}>
            <ol>
                {row.map((playerSymbol, ci) => <li key={ci}>
                    <button onClick={() => handleSelectSquare(ri, ci)}>{playerSymbol}</button>
                </li>)}
            </ol>
        </li>)}
    </ol>);
}