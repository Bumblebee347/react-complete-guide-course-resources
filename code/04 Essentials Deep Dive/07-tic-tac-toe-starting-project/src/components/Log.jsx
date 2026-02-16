export default function Log({ turns }) {
    return (
        <ol id="log">
            {turns.map((turn, index) => {
                const { row, col } = turn.square;
                return (
                    <li
                        key={`${row}-${col}-${index}`}
                        className={index === 0 ? "highlighted" : undefined}
                    >
                        {turn.player} played at {row}, {col}
                    </li>
                );
            })}
        </ol>
    );
}