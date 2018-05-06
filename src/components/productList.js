import React, { Component } from 'react';
import Product from './product';

const ProductList = (props) => {
    return props.productList.map((product) => <Product handleSelectedProduct={props.handleSelectedProduct} product={product} key={product.id} />)
}
export default ProductList;

