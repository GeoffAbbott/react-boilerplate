/*
 *
 * CartPage
 *
 */

import React, { PropTypes } from 'react';

import { connect } from 'react-redux';

import Helmet from 'react-helmet';

import { createStructuredSelector } from 'reselect';

import { makeSelectCart } from './selectors';

export class CartPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {

    if (!this.props.cart) return (<h5>Loading Cart</h5>);

    return (

      <div>

        <Helmet

          title="CartPage"
          meta={[
            { name: 'description', content: 'Description of CartPage' },
          ]}

        />

        <h1>Cart Page</h1>

        <h3>{this.props.cart.attrs.line_items.length} items in cart</h3>

        <a href={this.props.cart.checkoutUrl}>

          <button className="btn btn-info">Checkout</button>

        </a>

      </div>

    );

  }

}

CartPage.propTypes = {

  dispatch: PropTypes.func.isRequired,

  cart: React.PropTypes.oneOfType([

    React.PropTypes.object,

    React.PropTypes.bool,

  ]),

};

const mapStateToProps = createStructuredSelector({

  cart: makeSelectCart(),

});

function mapDispatchToProps(dispatch) {

  return {

    dispatch,

  };

}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
