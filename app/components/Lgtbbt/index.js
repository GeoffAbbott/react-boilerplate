/**
*
* Lgtbbt
*
*/

import React from 'react';
import styled from 'styled-components';
import SectionWithAlbumBackground from '../SectionWithAlbumBackground';

const CenteredText = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: center
  color: #fff;
  font-size: 56px;
  padding: 20px;
  font-weight: 800;
`;

const SubText  = styled.h3`
    color: #fff;
    font-weight: 500;
    letter-spacing: .8px;
    font-size: 24px;
    margin-bottom: 18px;
`;

const TagLine = 'Let\'s get the band back together';

const Mission = 'We’re pioneering the last great undiscovered catalogue of music and media.';

function Lgtbbt() {
  return (
    <SectionWithAlbumBackground>
      <CenteredText>
        {TagLine}
        <SubText>
          {Mission}
        </SubText>
      </CenteredText>
    </SectionWithAlbumBackground>
  );
}

Lgtbbt.propTypes = {

};

export default Lgtbbt;
