import React, { PropTypes } from 'react';

import CollegeBandModel from '../CollegeBand';

class Product extends CollegeBandModel {

  props = {

    name: React.PropTypes.bool,

  };

  constructor(params) {

    super();

    this.props.name = params.name;

  }

}

export default Product;

