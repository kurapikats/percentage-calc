import React, {Component} from 'react';

import NavBar from './nav_bar.jsx';

export default class Layout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { content } = this.props;

    return (
      <div class="flow-text">
        <NavBar />
        {content()}
      </div>
    );
  };
}
