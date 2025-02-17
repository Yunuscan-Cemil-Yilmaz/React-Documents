import { Component } from 'react';

class ScrollTracker extends Component {
  constructor(props) {
    super(props);
    this.state = { scrollPosition: 0 };
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (prevState.scrollPosition !== this.state.scrollPosition) {
      return window.scrollY;  
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot !== null) {
      console.log('Önceki kaydırma pozisyonu:', snapshot);
    }
  }

  render() {
    return (
      <div
        style={{ height: '4000px' }}
        onScroll={() => this.setState({ scrollPosition: window.scrollY })}
      >
        Scroll down
      </div>
    );
  }
}

export default ScrollTracker;
