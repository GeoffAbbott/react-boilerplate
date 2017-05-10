/*
 *
 * PopularAlbums
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ProductComp from 'components/Product';
import Product from 'models/Product';
import { makeSelectPopularAlbums, makeSelectPopularAlbumsLoading } from './selectors';
import { loadPopularAlbums } from './actions';

export class PopularAlbums extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {

    if (this.props.loading) return (<h5>Loading Popular Album</h5>);

    return (

      <div className="popularAlbumsWrap">

        {this.props.albums.map((product) => (<ProductComp key={`product-${product.id}`} product={new Product(product)} />))}

      </div>

    );

  }

}

PopularAlbums.propTypes = {

  dispatch: PropTypes.func.isRequired,

  loading: React.PropTypes.bool,

  error: React.PropTypes.oneOfType([

    React.PropTypes.object,

    React.PropTypes.bool,

  ]),

  albums: PropTypes.oneOfType([

    React.PropTypes.array,

    React.PropTypes.bool,

  ]),

};

const mapStateToProps = createStructuredSelector({

  albums: makeSelectPopularAlbums(),

  loading: makeSelectPopularAlbumsLoading(),

});

function mapDispatchToProps(dispatch) {

  dispatch(loadPopularAlbums());

  return {

    dispatch,

  };

}

export default connect(mapStateToProps, mapDispatchToProps)(PopularAlbums);
