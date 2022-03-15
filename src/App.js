import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const row1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  const row2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
  const row3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M', 'BACK'];

  const [guess1, setGuess1] = useState([]);

  useEffect(() => {
    function handleKeyDown(e) {
      if (
        /^(?:[A-Za-z]+)$/.test(e.key) &&
        e.key.length === 1 &&
        guess1.length < 5
      ) {
        setGuess1(guess1 + e.key.toUpperCase());
      } else if (e.code === 'Backspace' || e.key === 'BACK') {
        setGuess1(guess1.slice(0, -1));
      } else if (e.code === 'Enter' || e.key === 'ENTER') {
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
      setGuess1(guess1.slice(0, -1));
    } else if (guess1.length === 5) {
      return;
    } else {
      setGuess1(guess1 + button);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <p className="header">Friendle</p>
      </header>
      <container className="App-container">
        <div className="game-board-container">
          <div className="game-board">
            <div className="game-row">
              <div className="game-inner-row">
                <div className="game-tile">
                  <div className="tile">{guess1[0]}</div>
                </div>
                <div className="game-tile">
                  <div className="tile">{guess1[1]}</div>
                </div>
                <div className="game-tile">
                  <div className="tile">{guess1[2]}</div>
                </div>
                <div className="game-tile">
                  <div className="tile">{guess1[3]}</div>
                </div>
                <div className="game-tile">
                  <div className="tile">{guess1[4]}</div>
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
