/*
 *
 * ProductDetailsPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { makeSelectProduct, makeSelectLoading } from './selectors';
import { loadProduct } from '../ShopifyProvider/actions';
import Product from 'models/Product';

export class ProductDetailsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {

    if (!this.props.product) return (<h5>Loading...</h5>);

    const product = new Product(this.props.product);

    return (

      <div>

        <Helmet

          title={product.props.name}

          meta={[
            { name: 'description', content: product.props.description },
          ]}

        />

        <h1>{product.props.name}</h1>

        <h3>{product.props.description}</h3>

      </div>

    );

  }

}

ProductDetailsPage.propTypes = {

  loading: React.PropTypes.bool,

  error: React.PropTypes.oneOfType([

    React.PropTypes.object,

    React.PropTypes.bool,

  ]),

  product: React.PropTypes.oneOfType([

    React.PropTypes.object,

    React.PropTypes.bool,

  ]),

};

const mapStateToProps = createStructuredSelector({

  product: makeSelectProduct(),

  loading: makeSelectLoading(),

});

function mapDispatchToProps(dispatch, ownProps) {

  dispatch(loadProduct({

    handle: ownProps.routeParams.handle,

  }));

  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailsPage);
