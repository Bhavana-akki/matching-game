import React, { useState } from 'react';
import GameBoard from './components/GameBoard';
import ResultScreen from './components/ResultScreen';
import itemsData from './data/items.json';
import imagesData from './data/items.json';
import './gameboard.css'
const App: React.FC = () => {
  const [bananaCount, setBananaCount] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const handleBananaCollected = () => {
    setBananaCount(bananaCount + 1);
  };

  const handleGameEnd = () => {
    setGameOver(true);
  };

  return (
    <div className="app">
      {!gameOver ? (
        <GameBoard items={itemsData.items} images={imagesData.images} onBananaCollected={handleBananaCollected} onGameEnd={handleGameEnd} />
      ) : (
        <ResultScreen bananaCount={bananaCount} />
      )}
    </div>
  );
};

export default App;