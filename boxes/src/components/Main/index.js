import React from 'react';
import Box from '../Box';
import './style/index.css';

const data = [
  { name: 'Jesse', title: 'CEO', age: 39 },
  { name: 'Frank', title: 'Senior Dev', age: 43 },
  { name: 'Loco', title: 'Junior Dev', age: 22 },
  { name: 'Poco', title: 'Coffee maker', age: 22 },
];

const Main = () => {
  return (
    <main>
      <section>
        <div className='cards'>
          {data.map((user) => (
            <Box name={user.name} title={user.title} age={user.age} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Main;
