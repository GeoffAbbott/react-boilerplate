/*
 *
 * Playlist
 *
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { createStructuredSelector } from 'reselect';
import ProductComponent from 'components/Product';
import Product from 'models/Product';
import { makeSelectCollection, makeSelectLoading } from './selectors';
import { loadCollection } from '../ShopifyProvider/actions';

const ProductCollectionWrap = styled.div`
  min-height:600px;
`;

export class ProductCollection extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {

    const { loading, error, products } = this.props;

    const productProps = {
      loading,
      error,
      products,
    };

    return (

      <ProductCollectionWrap>

        {
          this.props.products ? this.props.products.map((p) => (<ProductComponent key={`product-${p.id}`} product={new Product(p)} />)) : <h5>Loading</h5>
        }

      </ProductCollectionWrap>

    );

  }

}

ProductCollection.propTypes = {

  loading: React.PropTypes.bool,

  error: React.PropTypes.oneOfType([

    React.PropTypes.object,

    React.PropTypes.bool,

  ]),

  products: React.PropTypes.oneOfType([

    React.PropTypes.array,

    React.PropTypes.bool,

  ]),

};

export function mapDispatchToProps(dispatch) {

  dispatch(loadCollection({

    collection_id: '364016070',

    limit: 4,

  }));

  return {};

}

const mapStateToProps = createStructuredSelector({

  products: makeSelectCollection(),

  loading: makeSelectLoading(),

});

export default connect(mapStateToProps, mapDispatchToProps)(ProductCollection);
