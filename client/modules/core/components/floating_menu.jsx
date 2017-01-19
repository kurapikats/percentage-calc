import React from 'react';

class FloatingMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="fixed-action-btn horizontal click-to-toggle">
        <a class="btn-floating btn-large deep-purple accent-2 waves-effect">
          <i class="large material-icons">menu</i>
        </a>
        <ul>
          <li>
            <a class="btn-floating red" href="/">
              <i class="material-icons">remove_circle</i>
            </a>
          </li>
          <li>
            <a class="btn-floating green" href="/Pincrease">
              <i class="material-icons">add_circle</i>
            </a>
          </li>
          <li>
            <a class="btn-floating orange" href="/XpercentY">
              <i class="material-icons">whatshot</i>
            </a>
          </li>
          <li>
            <a class="btn-floating blue" href="/YpercentX">
              <i class="material-icons">apps</i>
            </a>
          </li>
          <li>
            <a class="btn-floating brown" href="/Ypercent">
              <i class="material-icons">tab</i>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default FloatingMenu;
