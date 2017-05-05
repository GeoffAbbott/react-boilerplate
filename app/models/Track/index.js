
import { PropTypes } from 'react';

import CollegeBandModel from '../CollegeBand';

class Track extends CollegeBandModel {

  get schema() {

    return {

      name: PropTypes.string,

    };

  }

  constructor(params) {

    const newParams = {};

    newParams.name = params.name || 'No Name';

    newParams.coverUrl = params.Album.coverUrl || 'No Name';

    newParams.albumName = params.Album.name || 'No Name';

    newParams.artistName = params.Band.name || 'No Name';

    super(newParams);

  }

}

export default Track;
