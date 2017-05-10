/**
*
* ChartItem
*
*/

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router';
import { prepareTrackToPlay } from 'containers/App/actions';

const ChartItemWrap = styled.div`
  width:100%;
  height:50px;
`;

class ChartItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {

    return (

      <ChartItemWrap className="blop">

        <Link to={'/' + this.props.item._id.shopify.url}>

          { this.props.item._id.name }

        </Link>

        <div onClick={() => this.props.handleTrackClicked(this.props.item)}>

          Play Track
        </div>

      </ChartItemWrap>
    );
  }
}

ChartItem.propTypes = {

  item: PropTypes.object.isRequired,

  handleTrackClicked: PropTypes.func,

};

export function mapDispatchToProps(dispatch) {

  return {

    handleTrackClicked: (track) => dispatch(prepareTrackToPlay(track.tracks[0].track._id)),

  };

}

export default connect(null, mapDispatchToProps)(ChartItem);
