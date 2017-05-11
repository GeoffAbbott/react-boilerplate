/**
*
* NavItem
*
*/

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';
import NavDropDown from 'components/NavDropDown';

const Li = styled.li`
  float:left;
  padding: 0 20px;
  position:relative;
  &:hover .nav-drop-down{
    display:block;
  }
`;

class NavItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {

    return (

      <Li>

        <Link className="nav-item cb-grey" to={this.props.href}>{this.props.title}</Link>

        <NavDropDown className="drop-down" items={this.props.items} />

      </Li>

    );

  }

}

NavItem.propTypes = {

  title: React.PropTypes.string.isRequired,

  href: React.PropTypes.string.isRequired,

  items: React.PropTypes.array.isRequired,

};

export default NavItem;
