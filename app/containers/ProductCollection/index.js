/*
 *
 * Playlist
 *
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { createStructuredSelector } from 'reselect';
import { makeSelectCollection, makeSelectLoading } from './selectors';
import { loadCollection } from '../ShopifyProvider/actions';
import Product from 'models/Product';
// import { makeSelectPlaylist, makeSelectLoading } from './selectors';

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

  dispatch(loadCollection('364016070'));

  return {};
}

const mapStateToProps = createStructuredSelector({

  products: makeSelectCollection(),

  loading: makeSelectLoading(),

});

export default connect(mapStateToProps, mapDispatchToProps)(ProductCollection);
