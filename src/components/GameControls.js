const GameControls = ({ restartGame }) => (
    <div className="text-center">
        <button onClick={restartGame} className="mx-auto mt-4 p-2 bg-blue-500 text-white">
            Restart
        </button>
    </div>
);

export default GameControls;
