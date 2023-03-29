import './App.css';
import React from 'react';
import Button from './UI/Button';

class App extends React.Component {
  state = {
    count: 0,
    isOk: true,
  };

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrementCount = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    } else {
      this.setState({ isOk: false });
      setTimeout(() => {
        this.setState({ isOk: true });
      }, 100);
    }
  };

  decrementFiveFromCount = () => {
    if (this.state.count >= 5) {
      this.setState({ count: this.state.count - 5 });
    } else {
      this.setState({ isOk: false });
      setTimeout(() => {
        this.setState({ isOk: true });
      }, 100);
    }
  };

  incrementFiveToCount = () => {
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
          <Button handler={this.decrementFiveFromCount} title={'Decrement 5'} />
          <Button handler={this.decrementCount} title={'Decrement 1'} />
          <Button handler={this.resetCount} title={'Reset'} />
          <Button handler={this.incrementCount} title={'Increment 1'} />
          <Button handler={this.incrementFiveToCount} title={'Increment 5'} />
        </div>
      </div>
    );
  }
}

export default App;
