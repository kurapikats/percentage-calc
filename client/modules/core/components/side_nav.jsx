import React from 'react';

import velocity from 'materialize-css/js/velocity.min.js';
import 'materialize-css/js/hammer.min.js';
import 'materialize-css/js/jquery.hammer.js';
import 'materialize-css/js/sideNav.js';

class SideNav extends React.Component {
  constructor(props) {
    super(props);
    window.velocity = velocity;
  }

  componentDidMount() {
    $(".button-collapse").sideNav({
      closeOnClick: true,
      draggable: true
    });
  }

  render() {
    return (
      <div>
        <ul id="slide-out" class="side-nav">
          <li>
            <div class="userView">
              <div class="background">
                <img src="/images/abstract-300x400-1.jpg" />
              </div>
              <a href="#!user">
                <img class="circle" src="/images/shih-tzu.jpg" />
              </a>
              <a href="#!name">
                <span class="white-text name">Onin</span>
              </a>
              <a href="#!email">
                <span class="white-text email">jesus.nana@gmail.com</span>
              </a>
            </div>
          </li>
          <li><a class="subheader">Percentage Calculators</a></li>
          <li>
            <a href="/" class="waves-effect">
              <i class="material-icons">star</i>Discount
            </a>
          </li>
          <li>
            <a href="/Pincrease" class="waves-effect">
              <i class="material-icons">add</i>Increase
            </a>
          </li>
          <li><div class="divider"></div></li>
          <li>
            <a class="subheader">Calculators that answers the ff questions:</a>
          </li>
          <li>
            <a href="/XpercentY" class="waves-effect">
              <i class="material-icons">tab</i>What is 10% of 100?
            </a>
          </li>
          <li>
            <a href="/YpercentX" class="waves-effect">
              <i class="material-icons">tab</i>50 is what percent of 200?
            </a>
          </li>
          <li>
            <a href="/Ypercent" class="waves-effect">
              <i class="material-icons">tab</i>10 is 50% of what?
            </a>
          </li>
        </ul>
        <a href="#" data-activates="slide-out" class="button-collapse"
          style={{color: '#26a69a'}}>
          <i class="material-icons">menu</i>
        </a>
      </div>
    );
  }
}

export default SideNav;
