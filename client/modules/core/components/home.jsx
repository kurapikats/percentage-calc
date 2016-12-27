import React, {Component} from 'react';

import '../libs/common.js';
import CalcButton from './calc_button.jsx';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      original_price: "",
      discount_percentage: "",
      discounted_price: 0,
      discount_amount: 0
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.calculate();
  }

  calculate() {
    let {original_price, discount_percentage} = this.state;
    let discount_amount = ((original_price * discount_percentage) / 100);
    let discounted_price = original_price - discount_amount;

    this.setState({
      discounted_price,
      discount_amount
    });
  }

  handlePriceChange(e) {
    this.setState({
      original_price: e.target.value
    });

    this.calculate();
  }

  handleDiscountChange(e) {
    this.setState({
      discount_percentage: e.target.value,
      original_price: this.state.original_price
    });

    this.calculate();
  }

  render() {
    return (
      <div class="row">
        <h5 class="center teal-text">Discount</h5>
        <form class="col s12" onSubmit={this.handleSubmit.bind(this)}>
          <div class="col s1"></div>
          <div class="col s10">
            <div class="input-field col s12">
              <i class="material-icons prefix">input</i>
              <input
                type="number"
                name="original_price"
                value={this.state.original_price}
                onChange={this.handlePriceChange.bind(this)}
                onBlur={this.calculate.bind(this)}
                autoComplete="off"
                min="0"
                class="validate"
                placeholder="ie. 100"
                required
              />
              <label class="active" for="original_price">Initial Value</label>
            </div>
            <div class="input-field col s12">
              <i class="material-icons prefix">input</i>
              <input
                type="number"
                name="discount_percentage"
                value={this.state.discount_percentage}
                onChange={this.handleDiscountChange.bind(this)}
                onBlur={this.calculate.bind(this)}
                autoComplete="off"
                min="0"
                max="100"
                class="validate"
                placeholder="ie. 10"
                required
              />
              <label class="active" for="discount_percentage">Discount %</label>
            </div>
          </div>
          <div class="col s1"></div>

          <div class="center">
            <CalcButton
              a_value={this.state.original_price}
              b_value={this.state.discount_percentage}
            />
          </div>
          <p>
            Final Value:&nbsp;
              <strong>{this.state.discounted_price.formatMoney(2)}</strong><br/>
            Difference:&nbsp;
              <strong>{this.state.discount_amount.formatMoney(2)}</strong>
          </p>
        </form>
      </div>
    );
  }
}
