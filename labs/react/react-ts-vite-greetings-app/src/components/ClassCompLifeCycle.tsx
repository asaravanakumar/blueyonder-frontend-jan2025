import React, { Component } from "react";

class ClassCompLifeCycle extends Component {
  constructor(props) {
    super(props);
    console.log("[ClassComponent] Constructor");
    this.state = { count: 0 };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("[ClassComponent] getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("[ClassComponent] componentDidMount");
    // API Calls or Subscriptions
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[ClassComponent] shouldComponentUpdate");
    return true; // Re-render when state changes
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[ClassComponent] getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[ClassComponent] componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("[ClassComponent] componentWillUnmount");
    // Cleanup (remove event listeners, cancel API calls)
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log("Render");
    return (
      <div className="container mt-3 p-2 bg-info text-white">
        <h3 className="h-3">[ClassComponent] Count: {this.state.count}</h3>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default ClassCompLifeCycle;
