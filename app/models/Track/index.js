
import { PropTypes } from 'react';

import CollegeBandModel from '../CollegeBand';

class Track extends CollegeBandModel {

  props = {

    name: PropTypes.string,

    url: PropTypes.string,

    coverUrl: PropTypes.string,

    albumName: PropTypes.string,

    artistName: PropTypes.string,

    handle: PropTypes.string,

  };

  constructor(params) {

    super();

    this.props.name = params.name || 'No Name';

    this.props.url = params.url || 'No Name';

    this.props.coverUrl = params.Album.coverUrl || 'No Name';

    this.props.albumName = params.Album.name || 'No Name';

    this.props.artistName = params.Band.name || 'No Name';

    this.props.handle = params.Band.shopify.url || 'No Name';

  }

}

export default Track;
