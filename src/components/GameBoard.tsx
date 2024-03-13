import React, { useState } from 'react';
import '../gameboard.css';
import ResultScreen from './ResultScreen';
interface Item {
  id: number;
  name: string;
}

interface Image {
  id: number;
  image_url: string;
}

interface CardProps {
  items: Item[];
  images: Image[];
  onBananaCollected: () => void;
  onGameEnd: () => void;
}

const GameBoard: React.FC<CardProps> = ({ items, images, onBananaCollected, onGameEnd }) => {
  const [selectedItems, setSelectedItems] = useState<Item[]>([]);
  const [selectedImages, setSelectedImages] = useState<Image[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<number>(0);

  const shuffleArray = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleItemClick = (selectedItem: Item) => {
    if (selectedItems.length < 1 && !selectedItems.includes(selectedItem)) {
      setSelectedItems([...selectedItems, selectedItem]);
    }
  };

  const handleImageClick = (selectedImage: Image) => {
    if (selectedImages.length < 1 && !selectedImages.includes(selectedImage)) {
      setSelectedImages([...selectedImages, selectedImage]);
    }
  };

  const checkForMatch = () => {
    if (selectedItems.length === 1 && selectedImages.length === 1) {
      const selectedItem = selectedItems[0];
      const selectedImage = selectedImages[0];

      if (selectedItem.name === selectedImage.image_url.split('/').pop()) {
        onBananaCollected();
        setMatchedPairs(matchedPairs + 1);
      }

      setSelectedItems([]);
      setSelectedImages([]);
    }
  };
  React.useEffect(() => {
    shuffleItems();
    shuffleImages();
  }, []);

  const shuffleItems = () => {
    const shuffledItems = shuffleArray([...items]);
  };

  const shuffleImages = () => {
    const shuffledImages = shuffleArray([...images]);
  };
  React.useEffect(() => {
    checkForMatch();
  }, [selectedItems, selectedImages]);

  React.useEffect(() => {
    if (matchedPairs === items.length) {
      onGameEnd();
    }
  }, [matchedPairs, items.length, onGameEnd]);

  return (
    <div className="game-board">
      {items.map((item) => (
        <div
          key={item.id}
          className={`card ${selectedItems.includes(item) ? 'selected' : ''}`}
          onClick={() => handleItemClick(item)}
        >
          {selectedItems.includes(item) ? item.name : ''}
        </div>
      ))}
      {images.map((image) => (
        <div
          key={image.id}
          className={`cards ${selectedImages.includes(image) ? 'selected' : ''}`}
          onClick={() => handleImageClick(image)}
        >
          {selectedImages.includes(image) ? (
            <img src={image.image_url} alt={image.image_url} />
          ) : (
            ''
          )}
        </div>
      ))}
    </div>
  );
};

export default GameBoard;
