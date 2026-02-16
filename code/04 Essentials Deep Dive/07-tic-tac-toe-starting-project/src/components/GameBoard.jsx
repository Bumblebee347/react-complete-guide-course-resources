const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBoard({ onSelectSquare, turns}) {
   let gameBoard = initialGameBoard;
   turns.forEach(turn => {
       const {square, player} = turn;
       const {row, col} = square;
       gameBoard[row][col] = player;
   })

    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handleSquareClick(rowIndex, squareIndex) {
    //     setGameBoard(prevBoard => {
    //         const newBoard = [...prevBoard.map(row => [...row]) ];
    //         newBoard[rowIndex][squareIndex] = activePlayerSymbol;
    //         return newBoard;
    //     })
    //
    //     onSelectSquare();
    // }

    return(
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((col, colIndex) => (
                        <li key={colIndex}>
                            <button onClick={() => onSelectSquare(rowIndex, colIndex)}>{col}</button>
                        </li>))}
                </ol>
            </li>)}
        </ol>
    )
}