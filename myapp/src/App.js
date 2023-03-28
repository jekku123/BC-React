import React, { useState } from 'react';
import './App.css';

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//     };
//   }

//   incrementCount = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   decrementCount = () => {
//     this.setState({ count: this.state.count - 1 });
//   };

//   render() {
//     return (
//       <div className='App'>
//         <h1>Counter</h1>
//         <div className='buttons'>
//           <button onClick={this.incrementCount}>Increment</button>
//           <button onClick={this.decrementCount}>Decrement</button>
//         </div>
//         <p>Count: {this.state.count}</p>
//       </div>
//     );
//   }
// }

const App = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrementCount = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className='App'>
      <h1>Counter</h1>
      <div className='buttons'>
        <button onClick={incrementCount}>Increment</button>
        <button onClick={decrementCount}>Decrement</button>
      </div>
      <p>Count: {count}</p>
    </div>
  );
};

export default App;
