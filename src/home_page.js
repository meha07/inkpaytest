import React from "react";

class Home extends React.Component {
  
  render() {
    return (
      <div className="home_wrapper">
        <h2>Welcome to Home Page!</h2>
        <div>
          <h2>Counter</h2>
          <div>{this.props.count}</div>
        </div>
      </div>
    );
  }
}

export default Home;