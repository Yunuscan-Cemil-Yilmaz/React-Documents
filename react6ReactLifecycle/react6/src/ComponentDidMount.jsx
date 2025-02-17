import { Component } from 'react';

class ComponentDidMount extends Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {
    if (!this.state.data) {
      return <h1>Loading...</h1>;
    }

    return (
      <div>
        {this.state.data.map(post => (
          <h3 key={post.id}>{post.title}</h3>
        ))}
      </div>
    );
  }
}

export default ComponentDidMount;