import { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
    this.intervalId = null;
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ seconds: this.state.seconds + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);  // clear timer
    console.log('Bileşen DOM\'dan kaldırıldı');
  }

  render() {
    return <h1>{this.state.seconds} seconds</h1>;
  }
}

export default Timer;
