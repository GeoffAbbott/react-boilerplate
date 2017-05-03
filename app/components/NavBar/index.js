/**
*
* NavBar
*
*/

import React from 'react';
import styled from 'styled-components';
import NavItem from 'components/NavItem';
import Logo from './logo.png';
import Img from './Img';

const HeaderWrap = styled.div`
  width:100%;
  padding: 15px 0px;
  text-align:left;
  border-bottom: 1px solid #d8d8d8;
`;

const LogoWrap = styled.div`
  display: inline-block;
`;

const Nav = styled.ul`
  line-height:63px;
  float:right;
  display:inline
`;

function NavBar() {
  return (
    <HeaderWrap>
      <LogoWrap className="logo-wrap">
        <Img src={Logo} alt="CollegeBand Logo" />
      </LogoWrap>
      <Nav>
        <NavItem title="Charts" href="/charts" />
        <NavItem title="Artists" href="/artists" />
        <NavItem title="Shop" href="/shop" />
        <NavItem title="News" href="/news" />
        <NavItem title="Add Band" href="/add-band" />
      </Nav>
    </HeaderWrap>
  );
}

NavBar.propTypes = {

};

export default NavBar;
