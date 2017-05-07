/**
*
* ListArtistItem
*
*/

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';

const ListArtistItemWrapper = styled.div`
  margin 5px 0;
`;

export class ListArtistItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {

    return (

      <ListArtistItemWrapper>

        <Link to={'/' + this.props.artist.props.handle}>

          {this.props.artist.props.name}

        </Link>

      </ListArtistItemWrapper>

    );

  }
}

ListArtistItem.propTypes = {

  artist: React.PropTypes.object,

};

export default ListArtistItem;
