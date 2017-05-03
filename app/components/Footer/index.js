/**
*
* Footer
*
*/

import React from 'react';
import styled from 'styled-components';

import BgImage from './footer-bg.jpg';

const FooterWrap = styled.div`
  background-image: #fe381a;
  color: #fff;
  background-image:url(${BgImage});
  min-height:300px;
  width:100%;
  background-size: 100% auto;
  background-repeat: repeat;
`;

function Footer() {
  return (
    <FooterWrap>
      <div className="container">
        <div className="row">
          <div className="col-md-3">1</div>
          <div className="col-md-3">2</div>
          <div className="col-md-3">3</div>
          <div className="col-md-3">4</div>
        </div>
      </div>
    </FooterWrap>
  );
}

Footer.propTypes = {

};

export default Footer;
