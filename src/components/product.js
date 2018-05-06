import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }
  handleClick = (selectedProduct) => {
    const currentProduct = this.props.product;
    this.props.handleSelectedProduct(currentProduct);
  }
  handleClickAdd = () => {
    const product = this.props.product;
    ++product.quantity;
    this.props.handleSelectedProduct(currentProduct);
}
  handleClickSub = () => {
    const product = this.props.product;
    --product.quantity;
    this.props.handleSelectedProduct(currentProduct);
  }
  render() {
      const { productName, cost, quantity } = this.props.product;
    return (
      <div>
        <span> { productName } </span><br />
        <span> { cost } </span><br />
        { !quantity && 
            <button onClick={this.handleClick}> Add To Cart </button>
        }
        { quantity &&
            <div> 
            <button onClick={this.handleClickAdd}> Sub </button>
            {quantity}
            <button onClick={this.handleClickSub}> Add </button></div>
        }
      </div>
    );
  }
}
