/**
*
* Footer
*
*/

import React from 'react';
import styled from 'styled-components';
import FooterCol from 'components/FooterCol';
import BgImage from './footer-bg.jpg';

const FooterWrap = styled.div`
  background-image: #fe381a;
  color: #fff;
  background-image:url(${BgImage});
  min-height:300px;
  padding-top:35px;
  width:100%;
  background-size: 100% auto;
  background-repeat: repeat;
`;

function Footer() {
  return (
    <FooterWrap>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <FooterCol title="Company" />
          </div>
          <div className="col-md-3">
            <FooterCol title="Help" />
          </div>
          <div className="col-md-3">
            <FooterCol title="Social" />
          </div>
          <div className="col-md-3">
            <h5>The worlds smartest music company.™</h5>
          </div>
        </div>
      </div>
    </FooterWrap>
  );
}

Footer.propTypes = {

};

export default Footer;
