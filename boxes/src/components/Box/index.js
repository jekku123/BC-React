import React from 'react';
import './style/index.css';

const Box = ({ name, title, age }) => {
  return (
    <div className='card'>
      <h2>{name}</h2>
      <p>Title: {title} </p>
      <p>Age: {age}</p>
    </div>
  );
};

export default Box;
