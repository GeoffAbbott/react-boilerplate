/**
*
* Track
*
*/

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router';
import { playTrack } from 'containers/App/actions';

const TrackContainer = styled.div`
  display: inline-block;
  width:100%;
  margin-bottom:5px;
`;

const AvatarContainer = styled.div`
  float: left;
  margin-right: .66667rem;
  display: table;
`;

const CoverArt = styled.img`
  height: 70px;
  width: 70px;
  border-radius: 50%;
  float: left;
  margin-right: .5rem;
`;

const statBox = styled.div`
  float:left;
`;

class Track extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {

    return (

      <TrackContainer>

        <AvatarContainer>

          <CoverArt onClick={() => this.props.handleTrackClicked(this.props.track)} src={this.props.track.props.coverUrl} />

        </AvatarContainer>

        <statBox>

          <ul>

            <li>{this.props.track.props.name}</li>

            <li>

              <Link to={this.props.track.props.handle}>

                {this.props.track.props.artistName}

              </Link>

            </li>

          </ul>

        </statBox>

      </TrackContainer>

    );

  }

}

Track.propTypes = {

  track: PropTypes.object,

  handleTrackClicked: PropTypes.func,

};

export function mapDispatchToProps(dispatch) {

  return {

    handleTrackClicked: (track) => dispatch(playTrack(track)),

  };

}

export default connect(null, mapDispatchToProps)(Track);
