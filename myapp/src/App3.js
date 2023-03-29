import './App.css';
import React from 'react';
import Button from './UI/Button';
import { useReducer } from 'react';
import { countReducer } from './context/countReducer';
import { buttonData } from './context/buttonData';

const App = () => {
  const [count, handleCount] = useReducer(countReducer, 0);

  return (
    <div className='App'>
      <h1>Counter</h1>
      <div
        className={
          (count === 0 && `count`) ||
          (count % 2 === 0 ? 'count even' : 'count odd')
        }
      >
        {count}
      </div>
      <div className='buttons'>
        {buttonData.map((button) => (
          <Button
            key={button.title}
            handler={() => handleCount({ type: button.action })}
            title={button.title}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
