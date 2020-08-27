import React from 'react';
import './App.css';
import Lottery from './Lottery';

function App() {
  return (
    <div className="App">
      <Lottery />
      <Lottery title="Easy Lotto" maxNum={10} maxBalls={4} />
    </div>
  );
}

export default App;
