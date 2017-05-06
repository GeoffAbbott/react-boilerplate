import React, { PropTypes } from 'react';

import CollegeBandModel from '../CollegeBand';

class Product extends CollegeBandModel {

  props = {

    name: React.PropTypes.string,

    id: React.PropTypes.string,

    handle: React.PropTypes.string,

  };

  constructor(params) {

    super();

    this.props.name = params.title;

    this.props.id = params.id;

    this.props.handle = params.attrs.handle;

    this.props.images = params.images;

  }

}

export default Product;

