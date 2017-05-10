/**
*
* Player
*
*/

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import { Link } from 'react-router';
import { makeSelectTrack } from './selectors';


const PlayerWrap = styled.div`
  position:fixed;
  width:100%;
  height:100px;
  left:0;
  bottom:-100px;
  background-color:#fff;
  z-index:999;
  border-top:#666 thin solid;
`;

class Player extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {

    if (!this.props.track) return (<div>No Bueno</div>);

    return (

      <PlayerWrap className={'animate ' + (this.props.track ? 'show' : '')}>

        <h1>{this.props.track ? this.props.track.track.name : 'No track loaded'}</h1>

        <h5>

          <Link to={'/' + this.props.track.band.shopify.url}>

            {this.props.track.band.name}

          </Link>

        </h5>

        {this.props.track ? <audio autoPlay="true"><source src={this.props.track.track.url} /></audio> : ''}

      </PlayerWrap>

    );

  }

}

Player.propTypes = {

  track: React.PropTypes.oneOfType([

    React.PropTypes.object,

    React.PropTypes.bool,

  ]),

};

export function mapDispatchToProps() {

  return {};

}

const mapStateToProps = createStructuredSelector({

  track: makeSelectTrack(),

});

export default connect(mapStateToProps, mapDispatchToProps)(Player);
