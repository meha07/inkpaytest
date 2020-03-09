import React from "react";
import Home from './home_page';
import Counter from './counter_page';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";


class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = { count: 0 }
      this.increment = (e) => {
        if (e.target.classList.contains("active")) {
          this.setState({
            count: this.state.count
          });
        } else {
          this.setState({
            count: this.state.count + 1
          });
        }
      }
      this.test = () => {
        console.log("herree")
      }
    }

    render() {
    return (
      <Router>
        <div>
          <nav>
            <ul className="navbar">
              <li>
                <NavLink onClick={this.increment} exact to="/" activeClassName="active" >Home</NavLink>
              </li>
              <li>
                <NavLink onClick={this.increment} to="/counter" activeClassName="active">Counter</NavLink>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/counter">
              <Counter count={this.state.count}/>
            </Route>
          
            <Route path="/">
              <Home count={this.state.count}/>
            </Route>
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;

