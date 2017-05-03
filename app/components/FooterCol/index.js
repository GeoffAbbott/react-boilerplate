/**
*
* FooterCol
*
*/

import React from 'react';
import styled from 'styled-components';
import A from './A';

const ColTitle = styled.li`
  font-weight:bold;
  padding-bottom:10px;
`;
const Li = styled.li`
  margin-top:10px;
`;

const Links = {
  Company: [
    {
      title: 'About',
      link: '/about',
    },
    {
      title: 'News & Events',
      link: '/news',
    },
    {
      title: 'Licensing',
      link: '/licensing',
    },
    {
      title: 'Subscriptions',
      link: '/subscriptions',
    },
    {
      title: 'Playlists',
      link: '/playlists',
    },
  ],
  Help: [
    {
      title: 'Shipping',
      link: '/shipping',
    },
    {
      title: 'Returns',
      link: '/returns',
    },
    {
      title: 'Faq',
      link: '/faq',
    },
    {
      title: 'Digitize',
      link: '/digitize',
    },
    {
      title: 'Contact',
      link: '/contact',
    },
  ],
  Social: [
    {
      title: 'Facebook',
      link: '/shipping',
    },
    {
      title: 'Twitter',
      link: '/returns',
    },
    {
      title: 'Instagram',
      link: '/faq',
    },
    {
      title: 'Spotify',
      link: '/digitize',
    },
  ],
};

function FooterCol(props) {
  const content = Links[props.title].map(
    (link, index) => (<Li key={`item-${index}`}><A to={link.link}>{link.title}</A></Li>)
  );

  return (
    <ul>
      <ColTitle>{props.title}</ColTitle>
      {content}
    </ul>
  );
}

FooterCol.propTypes = {
  title: React.PropTypes.string.isRequired,
};

export default FooterCol;
