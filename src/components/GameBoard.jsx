const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard() {
    return (<ol id="game-board">
        {initialGameBoard.map((row, ri) => <li key={ri}>
            <ol>
                {row.map((playerSymbol, ci) => <li key={ci}>
                    <button>{playerSymbol}</button>
                </li>)}
            </ol>
        </li>)}
    </ol>);
}