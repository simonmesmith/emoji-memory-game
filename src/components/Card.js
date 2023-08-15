const Card = ({ card, index, onCardClick }) => {
    const baseClasses = 'm-2 w-16 h-24 rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-200';
    const hiddenCardClasses = 'border-gray-600 bg-gradient-to-br from-gray-400 via-gray-500 to-gray-400';
    const revealedCardClasses = 'border-gray-300 bg-gray-200';
    const cardClasses = `${baseClasses} ${card.state === 'hidden' ? hiddenCardClasses : revealedCardClasses} ${card.state === 'revealed' ? 'flip' : ''}`;
    const questionMarkClasses = 'text-2xl font-bold text-white text-opacity-75';

    return (
        <div key={index} className={cardClasses} onClick={() => onCardClick(index)}>
            {card.state === 'hidden' ? (
                <div className={questionMarkClasses}>?</div>
            ) : (
                <div>{card.emoji}</div>
            )}
        </div>
    );
};

export default Card;
