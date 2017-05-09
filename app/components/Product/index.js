/**
*
* Product
*
*/

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';

const ProductWrap = styled.div`
  width:100%;
  overflow:hidden;
  position:relative;
  float:left;
  width:280px;
  height:280px;
`;

const ImageWrap = styled.div`
  width:100%;
  position:relative;
  padding:10px;
`;

const ProductImage = styled.img`

`;

class Product extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {

    return (

      <ProductWrap>

        <ImageWrap>

          <Link to={`/product/${this.props.product.props.handle}`}>

            <ProductImage src={this.props.product.getImageWithSize('large')} />

          </Link>

        </ImageWrap>

      </ProductWrap>

    );

  }

}

Product.propTypes = {
  product: PropTypes.object,
};

export default Product;
