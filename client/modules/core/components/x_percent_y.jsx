import React from 'react';

import '../libs/common.js';
import CalcButton from './calc_button.jsx';

class XPercentY extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      p_value: "",
      x_value: "",
      result: 0
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.calculate();
  }

  calculate() {
    let {p_value, x_value} = this.state;
    let result = (p_value / 100) * x_value;

    this.setState({
      result
    });
  }

  handlePChange(e) {
    this.setState({
      p_value: e.target.value
    });

    this.calculate();
  }

  handleXChange(e) {
    this.setState({
      x_value: e.target.value,
      p_value: this.state.p_value
    });

    this.calculate();
  }

  getQuestion() {
    let {p_value, x_value} = this.state;

    if (p_value && x_value) {
      return (
        <span>
          Question: What is&nbsp;
            <strong>{this.state.p_value}%</strong> of&nbsp;
            <strong>{this.state.x_value}</strong>?<br/>
        </span>
      );
    }
  }

  render() {
    return (
      <div class="row">
        <h5 class="center teal-text">What is __% of __?</h5>
        <h6 class="center grey-text">Q: What is 50% of 100? A: 50</h6><br/>
        <form class="col s12" onSubmit={this.handleSubmit.bind(this)}>
          <div class="col s1"></div>
          <div class="col s10">
            <div class="input-field col s12">
              <i class="material-icons prefix">input</i>
              <input
                type="number"
                name="p_value"
                value={this.state.p_value}
                onChange={this.handlePChange.bind(this)}
                onBlur={this.calculate.bind(this)}
                autoComplete="off"
                class="validate"
                placeholder="ie. 50%"
                required
              />
              <label class="active" for="p_value">What is (%)</label>
            </div>
            <div class="input-field col s12">
              <i class="material-icons prefix">input</i>
              <input
                type="number"
                name="x_value"
                value={this.state.x_value}
                onChange={this.handleXChange.bind(this)}
                onBlur={this.calculate.bind(this)}
                autoComplete="off"
                class="validate"
                placeholder="ie. 100"
                required
              />
              <label class="active" for="x_value">of</label>
            </div>
          </div>
          <div class="col s1"></div>

          <div class="center">
            <CalcButton
              a_value={this.state.p_value}
              b_value={this.state.x_value}
            />
          </div>
          <p>
            {this.getQuestion()}
            Answer: <strong>{this.state.result.formatMoney(2)}</strong>
          </p>
        </form>
      </div>
    );
  }
}

export default XPercentY;
