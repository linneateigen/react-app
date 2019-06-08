import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Gallery from './Gallery';
import About from './About';

function Navigation() {
    return (
      <Router>
        <div>
          <ul className="HeaderNavigation">
            <li>
              <Link to="/">Gallery</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
  
          <Route exact path="/" component={Gallery} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }


  export default Navigation;