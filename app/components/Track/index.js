/**
*
* Track
*
*/

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import TrackModel from '../../models/Track';

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

function Track(props) {

  const track = new TrackModel(props.data);

  return (

    <TrackContainer>

      <AvatarContainer>

        <CoverArt src={track.props.coverUrl} />

      </AvatarContainer>

      <statBox>

        <ul>

          <li>{track.props.name}</li>

          <li>{track.props.artistName}</li>

        </ul>

      </statBox>

    </TrackContainer>

  );

}

Track.propTypes = {
  data: PropTypes.object,
};

export default Track;
