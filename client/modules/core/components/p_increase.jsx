import React, {Component} from 'react';

import '../libs/common.js';
import CalcButton from './calc_button.jsx';

export default class PIncrease extends Component {
  constructor(props) {
    super(props);

    this.state = {
      initial_value: "",
      increase: "",
      final_value: 0,
      increase_value: 0
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.calculate();
  }

  calculate() {
    let {initial_value, increase} = this.state;
    let increase_value = ((initial_value * increase) / 100);
    let final_value = parseInt(initial_value) + increase_value;

    this.setState({
      final_value,
      increase_value
    });
  }

  handleInititalChange(e) {
    this.setState({
      initial_value: e.target.value
    });

    this.calculate();
  }

  handleIncreaseChange(e) {
    this.setState({
      increase: e.target.value,
      initial_value: this.state.initial_value
    });

    this.calculate();
  }

  render() {
    return (
      <div class="row">
        <h5 class="center teal-text">Increase</h5>
        <form class="col s12" onSubmit={this.handleSubmit.bind(this)}>
          <div class="col s1"></div>
          <div class="col s10">
            <div class="input-field col s12">
              <i class="material-icons prefix">input</i>
              <input
                type="number"
                name="initial_value"
                value={this.state.initial_value}
                onChange={this.handleInititalChange.bind(this)}
                onBlur={this.calculate.bind(this)}
                autoComplete="off"
                min="0"
                class="validate"
                placeholder="ie. 100"
                required
              />
              <label class="active" for="initial_value">Initial Value</label>
            </div>
            <div class="input-field col s12">
              <i class="material-icons prefix">input</i>
              <input
                type="number"
                name="increase"
                value={this.state.increase}
                onChange={this.handleIncreaseChange.bind(this)}
                onBlur={this.calculate.bind(this)}
                autoComplete="off"
                min="0"
                class="validate"
                placeholder="ie. 10"
                required
              />
              <label class="active" for="increase">Increase (%)</label>
            </div>
          </div>
          <div class="col s1"></div>

          <div class="center">
            <CalcButton
              a_value={this.state.initial_value}
              b_value={this.state.increase}
            />
          </div>
          <p>
            Final Value:&nbsp;
              <strong>{this.state.final_value.formatMoney(2)}</strong><br/>
            Increase Value:&nbsp;
              <strong>{this.state.increase_value.formatMoney(2)}</strong>
          </p>
        </form>
      </div>
    );
  }
}
