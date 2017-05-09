/*
 *
 * ShopPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import ProductComponent from 'components/Product';
import Product from 'models/Product';
import { createStructuredSelector } from 'reselect';
import { makeSelectProducts, makeSelectLoading } from './selectors';
import { loadCollection } from './actions';

const ProductCollectionWrap = styled.div`
  min-height:600px;
`;

export class ShopPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {

    return (

      <div>

        <Helmet
          title="Shop"
          meta={[
            { name: 'description', content: 'Description of ShopPage' },
          ]}

        />

        <ProductCollectionWrap>

          {
            this.props.products ? this.props.products.map((p) => (<ProductComponent key={`product-${p.id}`} product={new Product(p)} />)) : <h5>Loading</h5>
          }

        </ProductCollectionWrap>

      </div>

    );

  }

}

ShopPage.propTypes = {

  dispatch: PropTypes.func.isRequired,

  products: PropTypes.oneOfType([

    React.PropTypes.array,

    React.PropTypes.bool,

  ]),

};

function mapDispatchToProps(dispatch) {

  dispatch(loadCollection({

    collection_id: 351606342,

    limit: 100,

    tag: ['shirts'],

  }));

  return {

    dispatch,

  };

}

const mapStateToProps = createStructuredSelector({

  products: makeSelectProducts(),

  loading: makeSelectLoading(),

});


export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
