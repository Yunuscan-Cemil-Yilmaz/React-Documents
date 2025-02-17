import { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    // state inital value
    this.state = { count: 0 };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.count !== this.state.count;
    // if count changed -> return true and render component
    // if count not changed -> return false and dont render component
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count) {
      console.log(`Sayacın değeri güncellendi: ${this.state.count}`);
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increase
        </button>
      </div>
    );
  }
}

export default Counter;
