import React, { useState, useEffect } from 'react';
import './App.css';
import words from 'an-array-of-english-words';

// Jaylen Was Here @ 3/16/22 - 12:05 AM

const rowCount = 6;
const columnCount = 5;

function App() {
  const rows = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M', 'BACK'],
  ];

  const [indexedGuesses, setIndexedGuesses] = useState(
    [0, 0, [...new Array(rowCount)].map((_) => [...new Array(columnCount)].map((_) => ''))]
  );

  console.log(indexedGuesses);

  function handleSubGuess(key) {
    const [rowIndex, columnIndex, guesses] = indexedGuesses;
    if (
      /^(?:[A-Za-z]+)$/.test(key) &&
      key.length === 1 &&
      columnIndex < columnCount
    ) {
      guesses[rowIndex][columnIndex] = key.toUpperCase();
      setIndexedGuesses([rowIndex, columnIndex + 1, guesses]);
      return;
    }
    if (key === 'Backspace' && columnIndex > 0) {
      guesses[rowIndex][columnIndex] = '';
      setIndexedGuesses([rowIndex, columnIndex - 1, guesses]);
      return;
    }
    if (key === 'Enter' && guesses[rowIndex][columnCount - 1] !== '' && rowIndex <= rowCount - 1) {
      // console.log('Testing: ' + guesses[rowIndex]);
      const word = guesses[rowIndex].toString().replaceAll(',', '')
      console.log('List: ' + typeof(guesses[rowIndex]))
      console.log('String: ' + word.toLowerCase())
      if ((words.filter(w => w.length === 5)).includes(word.toLowerCase())) {
        setIndexedGuesses([rowIndex + 1, 0, guesses]);
      } else {
        alert('Not a vaild word!');        
      }
    }
  }

  useEffect(() => {
    function handleKeyDown(e) {
      handleSubGuess(e.key);
    }

    document.addEventListener('keydown', handleKeyDown);

    return function cleanup() {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

  function handleKeyboardButton(button) {
    console.log(`Button ${button}`);
    handleSubGuess(button);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p className="header">Friendle</p>
      </header>
      <div className="App-container">
        <div className="game-board-container">
          <div className="game-board">
            {[...Array(6).keys()].map((i) => {
              console.log(`${i}-i`);
              return (
                <div className="game-row">
                  <div className="game-inner-row">
                    {[...Array(5).keys()].map((j) => {
                      return (
                        <div className="game-tile">
                          <div className="tile">{indexedGuesses[2][i][j]}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {rows.map((row) => {
          return (
            <div className="keyboard-row">
              {row.map((letter) => {
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
          );
        })}
      </div>
    </div>
  );
}

export default App;
