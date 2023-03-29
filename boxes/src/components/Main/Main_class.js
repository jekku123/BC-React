import React from 'react';
import Box from '../Box';
import { data } from '../../data/data';
import { v4 as uuid } from 'uuid';
import './style/index.css';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      persons: [
        {
          id: uuid(),
          title: 'CEO',
          name: 'Jesse',
          age: 39,
        },
        {
          id: uuid(),
          title: 'Senior Dev',
          name: 'Frank',
          age: 42,
        },
        {
          id: uuid(),
          title: 'Senior Dev',
          name: 'Dino',
          age: 42,
        },
      ],
    };
  }

  addEventHandler = () => {
    this.setState(
      this.state.persons.map((person) => {
        if (person.name === 'Jesse') {
          return { ...person, name: 'Frank' };
        } else {
          return person;
        }
      })
    );
  };

  render() {
    return (
      <main>
        <section>
          <div className='cards'>
            {this.state.persons.map((user) => (
              <Box
                key={user.id}
                name={user.name}
                title={user.title}
                age={user.age}
              />
            ))}
          </div>
          <button onClick={this.addEventHandler}>Click</button>
        </section>
      </main>
    );
  }

  //   render() {
  //     return (
  //       <main>
  //         <section>
  //           <div className='cards'>
  //             {data.map((user) => (
  //               <Box
  //                 key={user.id}
  //                 name={user.name}
  //                 title={user.title}
  //                 age={user.age}
  //               />
  //             ))}
  //           </div>
  //         </section>
  //       </main>
  //     );
  //   }
}

export default Main;
