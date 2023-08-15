const Card = ({ card, index, onCardClick }) => (
    <div
        key={index}
        className={`w-12 h-12 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-200 border ${card.state === 'hidden'
            ? 'border-gray-600 bg-gray-400'
            : 'border-gray-300 bg-gray-200'
            }`}
        onClick={() => onCardClick(index)}
    >
        {card.state === 'hidden' ? '?' : card.emoji}
    </div>
);

export default Card;
