/**
*
* NavDropDown
*
*/

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';

const DropDownWrap = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background: #ffffff;
  border: 1px solid #cfd5d7;
  padding: 13px 0;
  z-index: 999;
  width: 160px;
  left: -80px;
  margin-left: 50%;
  text-align: center;
  font-size: 14px;
  border-radius: 5px;
  display:none;
  
  &:before {
    bottom: 100%;
    left: 50%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-color: rgba(136,183,213,0);
    border-bottom-color: #cfd5d7;
    border-width: 8px;
    margin-left: -8px;
    border-bottom-color: #ffffff;
    border-width: 8px;
    margin-left: -8px;
    z-index: 11;
  }
  
  &:after {
    bottom: 100%;
    left: 50%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-color: rgba(136,183,213,0);
    border-bottom-color: #cfd5d7;
    border-width: 7px;
    margin-left: -7px;
    border-bottom-color: #cfd5d7;
    border-width: 10px;
    margin-left: -10px;
  }
`;

const SubNavWrap = styled.div`
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 40px;
  text-align:center;
`;

class NavDropDown extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {

    if (!this.props.items.length) return (<div></div>);

    return (

      <DropDownWrap className="nav-drop-down">

        { this.props.items.map((item, index) => <SubNavWrap key={`sn-${index}`}><Link to={item.link}>{item.title}</Link></SubNavWrap>) }

      </DropDownWrap>

    );

  }

}

NavDropDown.propTypes = {

  items: React.PropTypes.array.isRequired,

};

export default NavDropDown;
