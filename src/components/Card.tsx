import React, { useState } from 'react';
import '../gameboard.css';
interface CardProps {
  item: string;
  isFlipped: boolean;
  onCardClick: () => void;
}

const Card: React.FC<CardProps> = ({ item, isFlipped, onCardClick }) => {
  const [isMatched, setIsMatched] = useState(false);

  const handleClick = () => {
    if (!isFlipped && !isMatched) {
      onCardClick();
    }
  };

  return (
    <div className={`card ${isFlipped || isMatched ? 'flipped' : ''}`} onClick={handleClick}>
      <div className="card-inner">
        <div className="card-front">App</div>
        <div className="card-back">{item}</div>
      </div>
    </div>
  );
};

export default Card;