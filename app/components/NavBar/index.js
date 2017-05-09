/**
*
* NavBar
*
*/

import React from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';
import NavItem from 'components/NavItem';
import Cart from 'containers/Cart';
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
        <Link to="/">
          <Img src={Logo} alt="CollegeBand Logo" />
        </Link>
      </LogoWrap>
      <Nav>
        <NavItem title="Charts" href="/charts/artists" />
        <NavItem title="Artists" href="/artists/name" />
        <NavItem title="Shop" href="/shop" />
        <NavItem title="News" href="/news" />
        <NavItem title="Add Band" href="/add-band" />
        <Cart />
      </Nav>
    </HeaderWrap>
  );
}

NavBar.propTypes = {

};

export default NavBar;
