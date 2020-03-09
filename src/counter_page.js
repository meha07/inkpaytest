import React from "react";

class Counter extends React.Component {
	render() {
	  	return (
	      	<div className="counter_wrapper">
        	<h2>Welcome to Counter Page!</h2>
        	<div>
          		<h2>Counter</h2>
          		<div>{this.props.count}</div>
          		
        		</div>
      		</div>
	  	);
	}
}

export default Counter;