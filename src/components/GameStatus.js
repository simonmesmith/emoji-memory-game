const GameStatus = ({ isGameWon, turns }) => (
    <div className="text-center mb-4">
        <div className={`${isGameWon ? 'text-green-500' : 'text-blue-600'} text-xl`}>
            {isGameWon ? `Congratulations! You've won in ${turns} turns!` : `Turns: ${turns}`}
        </div>
    </div>
);

export default GameStatus;
