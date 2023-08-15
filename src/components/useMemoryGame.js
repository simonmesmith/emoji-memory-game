import { useState } from 'react';

const useMemoryGame = (emojis, boardSize) => {
    const totalCards = boardSize * boardSize;

    const generateBoard = () => {
        let board = [];
        while (board.length < totalCards) {
            const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
            if (board.filter((emoji) => emoji === randomEmoji).length < 2) {
                board.push(randomEmoji, randomEmoji);
            }
        }
        return shuffleArray(board);
    };

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const [board, setBoard] = useState(generateBoard());
    const [cards, setCards] = useState(
        generateBoard().map((emoji) => ({
            emoji: emoji,
            state: 'hidden' // states: hidden, revealed, matched
        }))
    );
    const [turns, setTurns] = useState(0);

    const handleCardClick = (index) => {

        if (cards[index].state !== 'hidden') return; // Ignore already revealed or matched cards

        let newCards = [...cards];
        newCards[index].state = 'revealed';
        setCards(newCards);

        const revealedCards = newCards.map((card, idx) => ({
            card: card,
            index: idx
        })).filter((item) => item.card.state === 'revealed');

        if (revealedCards.length === 2) {
            setTurns(turns + 1);
            if (revealedCards[0].card.emoji === revealedCards[1].card.emoji) {
                // Matched
                revealedCards.forEach((item) => {
                    newCards[item.index].state = 'matched';
                });
                setCards(newCards);
            } else {
                // Mismatched
                setTimeout(() => {
                    revealedCards.forEach((item) => {
                        newCards[item.index].state = 'hidden';
                    });
                    setCards(newCards);
                }, 1000); // 1-second delay to show the cards before hiding
            }
        }
    };

    const restartGame = () => {
        setCards(
            generateBoard().map((emoji) => ({
                emoji: emoji,
                state: 'hidden' // states: hidden, revealed, matched
            }))
        );
        setTurns(0);
    };

    const isGameWon = cards.every((card) => card.state === 'matched');

    return {
        cards,
        turns,
        isGameWon,
        handleCardClick,
        restartGame,
    };
};

export default useMemoryGame;
