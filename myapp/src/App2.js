import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    count: 0,
  };

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrementCount = () => {
    this.state.count > 0 && this.setState({ count: this.state.count - 1 });
  };

  decrementFiveFromCount = () => {
    this.state.count >= 5 && this.setState({ count: this.state.count - 5 });
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
        <div className={`count ${this.state.count % 2 === 0 ? 'even' : 'odd'}`}>
          {this.state.count}
        </div>
        <div className='buttons'>
          <Button handler={this.decrementFiveFromCount} name={'Decrement 5'} />
          <Button handler={this.decrementCount} name={'Decrement 1'} />
          <Button handler={this.resetCount} name={'Reset'} />
          <Button handler={this.incrementCount} name={'Increment 1'} />
          <Button handler={this.incrementFiveToCount} name={'Increment 5'} />
        </div>
      </div>
    );
  }
}

class Button extends React.Component {
  render() {
    return <button onClick={this.props.handler}>{this.props.name}</button>;
  }
}
