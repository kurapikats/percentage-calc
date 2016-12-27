import React, {Component} from 'react';

import SideNav from './side_nav.jsx';

export default class Layout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { content } = this.props;

    return (
      <div class="flow-text">
        <SideNav />
        {content()}
      </div>
    );
  };
}
