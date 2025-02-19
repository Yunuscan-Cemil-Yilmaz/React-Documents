## events
event define is same with js but some differences because react use jsx.
event define with camelCase format in react. just like this:
onclick -> onClick
onchange -> onChange
onmouseover -> onMouseOver
....

## event object:
In React, the event object (synthetic event) is automatically passed as the first parameter to the event handler.
```
function App() {
  function handleClick(event) {
    console.log("Event Type:", event.type);
    console.log("Clicked Button:", event.target);
  }

  return <button onClick={handleClick}>Click!</button>;
}

export default App;
```

## Event Binding
In class components, the this context can sometimes be lost. There are a few ways to prevent this.

Method 1 (Use Bind): 
```
class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    alert("Class bileşeni içinde event!");
  }

  render() {
    return <button onClick={this.handleClick}>Tıkla</button>;
  }
}

export default App;
```


Method 2 (Use Arrow Function):
```
class App extends React.Component {
  handleClick = () => {
    alert("Class bileşeni içinde event!");
  };

  render() {
    return <button onClick={this.handleClick}>Tıkla</button>;
  }
}

export default App;
```

### Extra Notes : 
* Event propagation can be stopped with stopPropagation().
* Block the default event with preventDefault().