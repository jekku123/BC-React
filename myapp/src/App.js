import './App.css';
import React from 'react';
import Button from './UI/Button';

class App extends React.Component {
  state = {
    count: 0,
    isOk: true,
  };

  incrementOne = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrementOne = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    } else {
      this.setState({ isOk: false });
      setTimeout(() => {
        this.setState({ isOk: true });
      }, 100);
    }
  };

  decrementFive = () => {
    if (this.state.count >= 5) {
      this.setState({ count: this.state.count - 5 });
    } else {
      this.setState({ isOk: false });
      setTimeout(() => {
        this.setState({ isOk: true });
      }, 100);
    }
  };

  incrementFive = () => {
    this.setState({ count: this.state.count + 5 });
  };

  resetCount = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div className='App'>
        <h1>Counter</h1>
        <div
          className={
            (!this.state.isOk && `count broken`) ||
            (this.state.count === 0 && `count`) ||
            (this.state.count % 2 === 0 ? 'count even' : 'count odd')
          }
        >
          {this.state.count}
        </div>
        <div className='buttons'>
          <Button handler={this.decrementFive} title={'Decrement 5'} />
          <Button handler={this.decrementOne} title={'Decrement 1'} />
          <Button handler={this.resetCount} title={'Reset'} />
          <Button handler={this.incrementOne} title={'Increment 1'} />
          <Button handler={this.incrementFive} title={'Increment 5'} />
        </div>
      </div>
    );
  }
}

export default App;
