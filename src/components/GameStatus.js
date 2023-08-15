const GameStatus = ({ isGameWon, turns }) => (
    <div className="text-center mb-4">
        <div>{isGameWon ? "Congratulations! You've won!" : `Turns: ${turns}`}</div>
    </div>
);

export default GameStatus;
