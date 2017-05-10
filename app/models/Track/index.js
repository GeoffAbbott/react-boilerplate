
import { PropTypes } from 'react';

import CollegeBandModel from '../CollegeBand';

class Track extends CollegeBandModel {

  props = {

    trackName: PropTypes.string,

    trackUrl: PropTypes.string,

    albumCoverUrl: PropTypes.string,

    albumName: PropTypes.string,

    artistName: PropTypes.string,

    artistUrl: PropTypes.string,

  };

  constructor(params) {

    super();

    this.props.trackId = params.trackId || 'No Name';

    this.props.trackName = params.trackName || 'No Name';

    this.props.trackUrl = params.trackUrl || 'No Name';

    this.props.albumCoverUrl = params.albumCoverUrl || 'No Name';

    this.props.albumName = params.albumName || 'No Name';

    this.props.artistName = params.artistName || 'No Name';

    this.props.artistUrl = params.artistUrl || 'No Name';

  }

}

export default Track;
