const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard({ onSelectSquare }) {
    // const [ gameBoard, setGameBoard ] = useState(initialGameBoard);

    // function handleSelectSquare(rowIndex, colIndex) {
    //     setGameBoard(prev => {
    //         const updated = [...prev.map(inner => [...inner])];

    //         updated[rowIndex][colIndex] = activePlayer;
    //         return updated;
    //     });

    //     onSelectSquare();
    // }

    return (<ol id="game-board">
        {gameBoard.map((row, ri) => <li key={ri}>
            <ol>
                {row.map((playerSymbol, ci) => <li key={ci}>
                    <button onClick={() => onSelectSquare(ri, ci)}>{playerSymbol}</button>
                </li>)}
            </ol>
        </li>)}
    </ol>);
}