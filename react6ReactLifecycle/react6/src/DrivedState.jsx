import { Component } from 'react';
import PropTypes from 'prop-types';

class DerivedState extends Component {
  constructor(props) {
    super(props);
    this.state = { message: '' };
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    if (nextProps.text !== nextState.message) {
      return { message: nextProps.text };  // translate propses new text to state
    }
    return null;  // if state not change: return null (false)
  }

  render() {
    return <h1>{this.state.message}</h1>;
  }
}


DerivedState.propTypes = {
    text: PropTypes.string.isRequired,
}

export default DerivedState;
