## constructor
 state inital value. 
 this is for class based components
 u can use useState, useEffect at functional components.
 ## getDrivedStateFromProps
 update state (constructor) when change props
 this is for class based components
 u can use useState, useEffect at functional components.
 ## render
 return jsx 
 u have to use at class based components!
 cant use at functional components. if u use functional u should use just return.
 ## componentDidMount
 Called after the component is added to the DOM. Commonly used for API calls and side effects.
 this is for class based components
 u can use useEffect at functional components.
 ## shouldComponentUpdate
 for menage to rendering.
 if this method return false, not make changes!
 ```
 shouldComponentUpdate(nextProps, nextState) {
  return nextState.count !== this.state.count;
}
```
 this is for class based components.
 u can use React.memo for same optimazation.
 ## getSnapshotBeforeUpdate
 This method takes a "snapshot" of the final state of the component before it is updated. This snapshot will usually be related to data in the DOM (for example, a scroll position or DOM dimensions).
 Let's say we want to keep track of the scroll position on a list. When we update the list, we don't want to lose the scroll position. In this case, we can store the scroll position using the getSnapshotBeforeUpdate() method.
 ```
  getSnapshotBeforeUpdate(prevProps, prevState) {
    const list = this.listRef;
    return list ? list.scrollTop : null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot !== null) {
      this.listRef.scrollTop = snapshot;
    }
  }
```
 It is not used in functional components, but alternative solutions can be produced for such operations with the useEffect Hook.
 ## componentDidUpdate
 Called after the component is updated. Provides access to old props and state.
 It is not used in functional components, but alternative solutions can be produced for such operations with the useEffect Hook.
```
   componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count) {
      console.log(`Counter value is update: ${this.state.count}`);
    }
  }
```
 ## componentWillUnmount
 Call before remove component 
```
   componentWillUnmount() {
    clearInterval(this.intervalId); 
    console.log('Bileşen DOM\'dan kaldırıldı');
  }
```
 It is not used in functional components, but alternative solutions can be produced for such operations with the useEffect Hook.