/*
 *
 * Cart
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import { makeSelectCart } from './selectors';

const CartContainer = styled.li`
  float:left
  width:45px;
  height:45px;
  background-color:red;
  margin-top: 8.5px;
  line-height:45px;
  text-align:center;
`;

export class Cart extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {

    return (

      <CartContainer>

        {this.props.cart ? this.props.cart.attrs.line_items.length : 0}

      </CartContainer>

    );

  }

}

Cart.propTypes = {

  cart: React.PropTypes.oneOfType([

    React.PropTypes.object,

    React.PropTypes.bool,

  ]),

};

const mapStateToProps = createStructuredSelector({

  cart: makeSelectCart(),

});

function mapDispatchToProps() {

  return {};

}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
