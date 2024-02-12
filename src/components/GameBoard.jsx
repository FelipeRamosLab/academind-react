export default function GameBoard({ onSelectSquare, board }) {
    return (<ol id="game-board">
        {board.map((row, ri) => <li key={ri}>
            <ol>
                {row.map((playerSymbol, ci) => <li key={ci}>
                    <button onClick={() => onSelectSquare(ri, ci)} disabled={playerSymbol !== null}>
                        {playerSymbol}
                    </button>
                </li>)}
            </ol>
        </li>)}
    </ol>);
}