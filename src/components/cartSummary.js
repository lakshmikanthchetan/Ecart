import React, { Component } from 'react';

export default class CartSummary extends Component {
  constructor(props) {
    super(props);

    this.total = 0;
    this.state = {

    }
  }
  componentDidMount() {
      const selectedCartList = this.props.selectedCartList;
      selectedCartList.length && selectedCartList.reduce((total= 0 , product) => {
          this.total = total + product.cost;
      })
  }
  render() {
    const selectedCartList = this.props.selectedCartList;

    console.log(selectedCartList);

    return (
      <div>
        cart Summary
        { this.props.selectedCartList.map((product) => {
            return ( 
                <div>
                    
                </div>
            )
        })
        
        }
        <span> Total { this.total } </span>
      </div>
    );
  }
}
