import './App.css';
import React from 'react';
import Button from './UI/Button';
import { useReducer } from 'react';
import { countReducer } from './context/countReducer';
import { buttonData } from './context/buttonData';

const App = () => {
  const [count, handleCount] = useReducer(countReducer, 0);

  const updateCount = (type) => {
    handleCount({ type: type });
  };

  return (
    <div className='App'>
      <h1>Counter</h1>
      <div className={`count ${count % 2 === 0 ? 'even' : 'odd'}`}>{count}</div>
      <div className='buttons'>
        {buttonData.map((button) => (
          <Button
            key={button.name}
            handler={() => updateCount(button.action)}
            name={button.name}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
