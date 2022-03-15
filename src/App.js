import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const row1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  const row2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
  const row3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M', 'BACK'];

  const [guess1, setGuess1] = useState('')
  const [word, setWord] = useState('');

  useEffect(() => {
    function handleKeyDown(e) {
      if (/^(?:[A-Za-z]+)$/.test(e.key) && e.key.length === 1) {
        setWord(word + e.key.toUpperCase());
      } else if (e.code === 'Backspace' || e.key === 'BACK') {
        setWord(word.slice(0, -1));
      } else {
        return;
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return function cleanup() {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

  function handleKeyboardButton(button) {
    console.log(`Button ${button}`);
    if (button === 'BACK') {
      setWord(word.slice(0, -1));
    } else {
      setWord(word + button);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <p className="header">Friendle</p>
      </header>
      <container className="App-container">
        <div className="game-board">
          <div className="game-row">
            <div className="game-inner-row">
              <div className="game-tile">
                <div className="tile"></div>
              </div>
              <div className="game-tile">
                <div className="tile"></div>
              </div>
              <div className="game-tile">
                <div className="tile"></div>
              </div>
              <div className="game-tile">
                <div className="tile"></div>
              </div>
              <div className="game-tile">
                <div className="tile"></div>
              </div>
            </div>
          </div>
          <div className="game-row">
            <div className="game-inner-row">
              <div className="game-tile">
                <div className="tile"></div>
              </div>
              <div className="game-tile">
                <div className="tile"></div>
              </div>
              <div className="game-tile">
                <div className="tile"></div>
              </div>
              <div className="game-tile">
                <div className="tile"></div>
              </div>
              <div className="game-tile">
                <div className="tile"></div>
              </div>
            </div>
          </div>
          <div className="game-row">
            <div className="game-inner-row">
              <div className="game-tile">
                <div className="tile"></div>
              </div>
              <div className="game-tile">
                <div className="tile"></div>
              </div>
              <div className="game-tile">
                <div className="tile"></div>
              </div>
              <div className="game-tile">
                <div className="tile"></div>
              </div>
              <div className="game-tile">
                <div className="tile"></div>
              </div>
            </div>
          </div>
          <div className="game-row">
            <div className="game-inner-row">
              <div className="game-tile">
                <div className="tile"></div>
              </div>
              <div className="game-tile">
                <div className="tile"></div>
              </div>
              <div className="game-tile">
                <div className="tile"></div>
              </div>
              <div className="game-tile">
                <div className="tile"></div>
              </div>
              <div className="game-tile">
                <div className="tile"></div>
              </div>
            </div>
          </div>
          <div className="game-row">
            <div className="game-inner-row">
              <div className="game-tile">
                <div className="tile"></div>
              </div>
              <div className="game-tile">
                <div className="tile"></div>
              </div>
              <div className="game-tile">
                <div className="tile"></div>
              </div>
              <div className="game-tile">
                <div className="tile"></div>
              </div>
              <div className="game-tile">
                <div className="tile"></div>
              </div>
            </div>
          </div>
          <div className="game-row">
            <div className="game-inner-row">
              <div className="game-tile">
                <div className="tile"></div>
              </div>
              <div className="game-tile">
                <div className="tile"></div>
              </div>
              <div className="game-tile">
                <div className="tile"></div>
              </div>
              <div className="game-tile">
                <div className="tile"></div>
              </div>
              <div className="game-tile">
                <div className="tile"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="keyboard-row">
          {row1.map((letter) => {
            return (
              <button
                className="keyboard-button"
                onClick={() => handleKeyboardButton(letter)}
              >
                {letter}
              </button>
            );
          })}
        </div>
        <div className="keyboard-row">
          {row2.map((letter) => {
            return (
              <button
                className="keyboard-button"
                onClick={() => handleKeyboardButton(letter)}
              >
                {letter}
              </button>
            );
          })}
        </div>
        <div className="keyboard-row">
          {row3.map((letter) => {
            return (
              <button
                className="keyboard-button"
                onClick={() => handleKeyboardButton(letter)}
              >
                {letter}
              </button>
            );
          })}
        </div>
      </container>
    </div>
  );
}

export default App;
