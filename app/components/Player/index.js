/**
*
* Player
*
*/

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
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

const AudioObject = styled.audio`
  display:none;
`;

class Player extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {

    console.log('redndering player');

    return (

      <PlayerWrap className={'animate ' + (this.props.track ? 'show' : '')}>

        <h1>{this.props.track ? this.props.track.props.name : 'No track loaded'}</h1>

        {this.props.track ? <audio autoPlay="true"><source src={this.props.track.props.url} /></audio> : ''}

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
