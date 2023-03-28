import React from 'react';
import Box from './Box';
import './Main.css';

const Main = () => {
  return (
    <main>
      <div className='cards'>
        <Box name={'Jesse'} title={'CEO'} age={39} />
        <Box name={'Frank'} title={'Senior Dev'} age={43} />
        <Box name={'Loco'} title={'Junior Dev'} age={22} />
      </div>
    </main>
  );
};

export default Main;
