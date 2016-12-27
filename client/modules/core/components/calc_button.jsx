import React from 'react';

class CalcButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {a_value, b_value} = this.props;
    let disabled = true;
    if (a_value && b_value) {
      disabled = false;
    }

    return (
      <button class="btn waves-effect waves-light" disabled={disabled}>
        <i class="material-icons right">send</i>
        Calculate
      </button>
    );
  }
}

export default CalcButton;
