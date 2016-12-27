import React from 'react';

import '../libs/common.js';
import CalcButton from './calc_button.jsx';

class YPercent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      y_value: "",
      p_value: "",
      result: 0
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.calculate();
  }

  calculate() {
    let {y_value, p_value} = this.state;
    let result = (y_value / p_value) * 100;

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

  handleYChange(e) {
    this.setState({
      y_value: e.target.value
    });

    this.calculate();
  }

  getQuestion() {
    let {p_value, y_value} = this.state;

    if (p_value && y_value) {
      return (
        <span>
          Question: <strong>{this.state.y_value}</strong> is <strong>{this.state.p_value}%</strong> of what?<br/>
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
        Answer: <strong>{answer}</strong>
      </span>
    );
  }

  render() {
    return (
      <div class="row">
        <h5 class="center teal-text">__ is __% of what?</h5>
        <h6 class="center grey-text">Q: 10 is 50% of what? A: 20</h6><br/>
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
                placeholder="ie. 10"
                required
              />
              <label class="active" for="y_value">__ is</label>
            </div>
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
              <label class="active" for="p_value">%</label>
            </div>
          </div>
          <div class="col s1"></div>

          <div class="center">
            <CalcButton
              a_value={this.state.y_value}
              b_value={this.state.p_value}
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

export default YPercent;
