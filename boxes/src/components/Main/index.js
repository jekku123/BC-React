import React from 'react';
import Box from '../Box';
import './style/index.css';
import { data } from '../../data/data';

const Main = () => {
  return (
    <main>
      <section>
        <div className='cards'>
          {data.map((user) => (
            <Box
              key={user.id}
              name={user.name}
              title={user.title}
              age={user.age}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Main;
