import React, { PropTypes } from 'react';

import CollegeBandModel from '../CollegeBand';

class Product extends CollegeBandModel {

  props = {

    name: React.PropTypes.string,

    id: React.PropTypes.string,

    handle: React.PropTypes.string,

    description: React.PropTypes.string,

  };

  constructor(params) {

    super();

    this.props.name = params.title;

    this.props.id = params.id;

    this.props.handle = params.attrs.handle;

    this.props.description = params.description;

    this.props.images = params.images;

  }

  getImageWithSize(size) {

    const index = this.props.images[0].src.indexOf('.jpg');

    return [this.props.images[0].src.slice(0, index), `_${size}`, this.props.images[0].src.slice(index)].join('');

  }

}

export default Product;

