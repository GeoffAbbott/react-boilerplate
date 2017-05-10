/*
 *
 * Playlist
 *
 */
import React, { PropTypes } from 'react';
import { createStructuredSelector } from 'reselect';
import TrackComponent from 'components/Track';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { makeSelectPlaylist, makeSelectLoading } from './selectors';
import { loadPlaylist } from './actions';
import TrackModel from '../../models/Track';

const PlaylistWrap = styled.div`
  margin-top:15px;
`;

const CoverArtWrap = styled.div`
  position: relative;
  -webkit-box-shadow: 2px 2px 18px -4px rgba(173,173,173,0.94);
  -moz-box-shadow: 2px 2px 18px -4px rgba(173,173,173,0.94);
  box-shadow: 2px 2px 18px -4px rgba(173,173,173,0.94);
  width: 100%;
  background-size: cover;
  background-position: 50%;
`;

export class Playlist extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {

    const { loading, error, playlist } = this.props;

    const playlistProps = {
      loading,
      error,
      playlist,
    };

    if (this.props.loading) return (<h5>Loading...</h5>);

    if (!this.props.loading && this.props.playlist) {

      const tracks = this.props.playlist.tracks.map((track, index) => {

        const p = new TrackModel({

          trackId: track._id,

          trackName: track.name,

          trackUrl: track.url,

          albumCoverUrl: track.Album.coverUrl,

          albumName: track.Album.name,

          artistName: track.Band.name,

          artistUrl: track.Band.shopify.url,

        });

        return <TrackComponent key={`repo-list-item-${index}`} track={p} />;

      });

      return (

        <PlaylistWrap>

          <div className="container-fluid margin-top">

            <div className="row margin-top">

              <div className="col-md-6">

                <CoverArtWrap>

                  <img src={this.props.playlist.coverUrl} alt="Boy George" />

                </CoverArtWrap>

              </div>

              <div className="col-md-6">

                {tracks}

              </div>

            </div>

          </div>

        </PlaylistWrap>
      );
    }

    return (

      <h1>
        Loading PLAYLIST
      </h1>

    );
  }
}

Playlist.propTypes = {

  loading: React.PropTypes.bool,

  error: React.PropTypes.oneOfType([

    React.PropTypes.object,

    React.PropTypes.bool,

  ]),

  playlist: React.PropTypes.oneOfType([

    React.PropTypes.object,

    React.PropTypes.bool,

  ]),

};

export function mapDispatchToProps(dispatch) {

  dispatch(loadPlaylist());

  return {};

}

const mapStateToProps = createStructuredSelector({

  playlist: makeSelectPlaylist(),

  loading: makeSelectLoading(),

});

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
