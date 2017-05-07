/**
*
* NavItem
*
*/

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';

const Li = styled.li`
  float:left;
  padding: 0 20px;
`;

class NavItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {

    return (

      <Li>

        <Link className="nav-item cb-grey" to={this.props.href}>{this.props.title}</Link>

      </Li>

    );

  }

}

NavItem.propTypes = {

  title: React.PropTypes.string.isRequired,

  href: React.PropTypes.string.isRequired,

};

export default NavItem;
