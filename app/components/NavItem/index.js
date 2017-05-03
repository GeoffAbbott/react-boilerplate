/**
*
* NavItem
*
*/

import React from 'react';
import styled from 'styled-components';

import A from './A';

function NavItem(props) { // eslint-disable-line react/prefer-stateless-function
  const Title = props.title;
  const Link = props.href;
  const Li = styled.li`
    float:left;
    padding: 0 20px;
  `;

  return (
    <Li>
      <A className="nav-item cb-grey" href={Link}>{Title}</A>
    </Li>
  );
}

NavItem.propTypes = {
  title: React.PropTypes.string.isRequired,
  href: React.PropTypes.string.isRequired,
};

export default NavItem;
