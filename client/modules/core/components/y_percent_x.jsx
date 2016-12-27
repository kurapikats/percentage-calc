import React from 'react';

import '../libs/common.js';
import CalcButton from './calc_button.jsx';

class YPercentX extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      y_value: "",
      x_value: "",
      result: 0
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.calculate();
  }

  calculate() {
    let {y_value, x_value} = this.state;
    let result = (y_value / x_value) * 100;

    this.setState({
      result
    });
  }

  handleXChange(e) {
    this.setState({
      x_value: e.target.value
    });

    this.calculate();
  }

  handleYChange(e) {
    this.setState({
      y_value: e.target.value,
      x_value: this.state.x_value
    });

    this.calculate();
  }

  getQuestion() {
    let {x_value, y_value} = this.state;

    if (x_value && y_value) {
      return (
        <span>
          Question: <strong>{this.state.y_value}</strong> is what percent of <strong>{this.state.x_value}</strong>?<br/>
        </span>
      );
    }
  }

  getAnswer() {
    let answer = 0;
    if ($.isNumeric(this.state.result)) {
      answer = this.state.result.toFixed(0);
    }

    return (
      <span>
        Answer: <strong>{answer}%</strong>
      </span>
    );
  }

  render() {
    return (
      <div class="row">
        <h5 class="center teal-text">__ is what percent of __?</h5>
        <h6 class="center grey-text">Q: 50 is what percent of 200? A: 25%</h6><br/>
        <form class="col s12" onSubmit={this.handleSubmit.bind(this)}>
          <div class="col s1"></div>
          <div class="col s10">
            <div class="input-field col s12">
              <i class="material-icons prefix">input</i>
              <input
                type="number"
                name="y_value"
                value={this.state.y_value}
                onChange={this.handleYChange.bind(this)}
                onBlur={this.calculate.bind(this)}
                autoComplete="off"
                class="validate"
                placeholder="ie. 50"
                required
              />
              <label class="active" for="y_value">__ is what</label>
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
                placeholder="ie. 200"
                required
              />
              <label class="active" for="x_value">% of __</label>
            </div>
          </div>
          <div class="col s1"></div>

          <div class="center">
            <CalcButton
              a_value={this.state.x_value}
              b_value={this.state.y_value}
            />
          </div>
          <p>
            {this.getQuestion()}
            {this.getAnswer()}
          </p>
        </form>
      </div>
    );
  }
}

export default YPercentX;
