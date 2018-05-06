import React, { Component } from 'react';
import ProductList from './productList';
import CartSummary from './cartSummary';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.productList = [];
    this.state = {
      selectedCartList : []
    }
  }
  componentWillMount() {
    this.productList = [
      {
          "id" : "1",
          "productName": "Iphone",
          "cost" : 699,
          "quantity": 0
      },
      {
          "id" : "2",
          "productName": "Samsung",
          "cost" : 300,
          "quantity" : 0
      }
    ];
  }
  handleSelectedProduct = (currentProduct) => {
    debugger
    const selectedCartList = this.state.selectedCartList.filter((selectedProduct)=> (selectedProduct.id !== currentProduct.id));
    console.log(selectedCartList);

    this.setState({
      selectedCartList
    });
  }

  render() {
    return (
      <div>
        <ProductList productList={this.productList} handleSelectedProduct={this.handleSelectedProduct} />
        <CartSummary selectedCartList = {this.state.selectedCartList} />
      </div>
    );
  }
}
