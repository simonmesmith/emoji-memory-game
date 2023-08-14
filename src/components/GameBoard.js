import React from 'react';

const GameBoard = () => {
    const boardSize = 6;

    return (
        <div className="flex flex-wrap w-72">
            {Array.from({ length: boardSize * boardSize }).map((_, index) => (
                <div
                    key={index}
                    className="w-12 h-12 border border-gray-400 flex items-center justify-center"
                >
                    ?
                </div>
            ))}
        </div>
    );
};

export default GameBoard;
