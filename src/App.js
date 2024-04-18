import React from 'react';
import Left from './components/Left.jsx';
import './styles/app.css';
import Right from './components/Right.jsx';

const App = () => {
  return (
    <div className="container">
      <Left />
      <Right />
    </div>
  );
};

export default App;
