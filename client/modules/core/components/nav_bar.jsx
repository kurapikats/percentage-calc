import React from 'react';
import 'materialize-css/js/jquery.easing.1.3.js';
import 'materialize-css/js/dropdown.js';

import SideNav from './side_nav.jsx';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $('.dropdown-button').dropdown({
      constrain_width: false
    });
  }

  render() {
    return (
      <div class="navbar-fixed">
        <nav class="deep-purple">
          <div class="nav-wrapper">
            <SideNav />
            <span style={{marginTop:0}}>Percentage Calculators</span>
            <ul class="right">
              <li>
                <a
                  href="#"
                  data-activates='dropdown-menu'
                  class="dropdown-button">
                  <i class="material-icons">more_vert</i></a>
              </li>
            </ul>
            <ul id='dropdown-menu' class='dropdown-content'>
              <li>
                <a href="/" class="waves-effect">
                  Discount
                </a>
              </li>
              <li>
                <a href="/Pincrease" class="waves-effect">
                  Increase
                </a>
              </li>
              <li class="divider"></li>
              <li>
                <a href="/XpercentY" class="waves-effect">
                  What is 10% of 100?
                </a>
              </li>
              <li>
                <a href="/YpercentX" class="waves-effect">
                  50 is what percent of 200?
                </a>
              </li>
              <li>
                <a href="/Ypercent" class="waves-effect">
                  10 is 50% of what?
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
