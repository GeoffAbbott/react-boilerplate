import React, { PropTypes } from 'react';

import CollegeBandModel from '../CollegeBand';

class Artist extends CollegeBandModel {

  props = {

    name: React.PropTypes.string,

    _id: React.PropTypes.string,

    handle: React.PropTypes.string,

    coverArtUrl: React.PropTypes.string,

    college: React.PropTypes.object,

  };

  constructor(params) {

    super();

    this.props.name = params.name;

    this.props.id = params._id;

    this.props.handle = params.shopify.url;

    this.props.coverArtUrl = params.coverArtUrl;

    this.props.college = params.colleges[0];

  }

}

export default Artist;
