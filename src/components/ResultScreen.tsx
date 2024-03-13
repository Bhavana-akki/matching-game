import React from 'react';
import '../gameboard.css';
interface ResultScreenProps {
  bananaCount: number;
}

const ResultScreen: React.FC<ResultScreenProps> = ({ bananaCount }) => {
  return (
    <div className="result-screen">
      <h2>Game Over!</h2>
      <p>You collected {bananaCount} bananas!</p>
      <img src="https://clipartspub.com/images/banana-clipart-smiley-6.png" alt="Banana" />
    </div>
  );
};

export default ResultScreen;