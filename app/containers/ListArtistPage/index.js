/*
 *
 * ListArtist
 *
 */

import React  from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import ListArtistItem from 'components/ListArtistItem';
import Artist from 'models/Artist';
import { createStructuredSelector } from 'reselect';
import { loadArtistsList } from '../ListArtistPage/actions';
import { makeSelectListArtist } from './selectors';

export class ListArtist extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {

    return (

      <div>

        <Helmet
          title="ListArtist"
          meta={[
            { name: 'description', content: 'Description of ListArtist' },
          ]}
        />

        { this.props.artists && this.props.artists.length ? this.props.artists.map((artist, index) => { return (<ListArtistItem key={`artist-list-item-${index}`} artist={new Artist(artist)} />); }) : <h5>Loading List</h5>}

      </div>

    );

  }

}

ListArtist.propTypes = {

  loading: React.PropTypes.bool,

  error: React.PropTypes.oneOfType([

    React.PropTypes.object,

    React.PropTypes.bool,

  ]),

  artists: React.PropTypes.oneOfType([

    React.PropTypes.array,

    React.PropTypes.bool,

  ]),

};

const mapStateToProps = createStructuredSelector({

  artists: makeSelectListArtist(),

});

export function mapDispatchToProps(dispatch) {

  dispatch(loadArtistsList());

  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(ListArtist);
