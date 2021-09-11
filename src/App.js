import React from 'react';
import logo from './dictionary.png';
import logo2 from './book.png';
import './App.css';

import Dictionary from './Dictionary';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="dictionary" />
        </main>
        <footer className="App-footer">
          <img src={logo2} className="App-logo2" alt="book" />
          Coded by Inga Mosienko</footer>
      </div>
    </div>
  );
}

export default App;
