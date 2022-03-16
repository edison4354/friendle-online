import React from 'react';

type Props = {
  guesses: string[]
  currentGuess: string
  isRevealing?: boolean
  currentRowClassName: string
};

const board = () => {
  return (
    <div>
      <div className="game-board-container">
        <div className="game-board">
          {
            
          }
        </div>
      </div>
    </div>
  );
};

export default board;
