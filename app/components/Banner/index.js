/**
*
* Banner
*
*/
import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';

const BannerContainer = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
  text-align: center;
  display: table;
  width: 100%;
  min-height: 385px;
  height: 385px;
  box-shadow: inset 0 0 0 1008px rgba(0,0,0,0.2);
  padding: 0;
`;

const InnerWrap = styled.div`
  display: table-cell;
  vertical-align: middle;
  position: relative;
  z-index: 2;
  width: 100%;
`;

const Title = styled.h1`
  margin-top: 0;
  color: white;
  text-shadow: 0px 1px 4px rgba(0,0,0,0.15);
`;

const CollegeLogo = styled.div`
  max-width: 135px;
  margin: 0 auto;
`;

class Banner extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {

    const BackgroundImage = {

      backgroundImage: `url(${this.props.coverImage})`,

      backgroundColor: `#${this.props.bannerColor}`,

    };

    return (

      <BannerContainer style={BackgroundImage}>

        <InnerWrap>

          <CollegeLogo>

            <Link to={`/college/${this.props.logoLink}`}>

              <img role="presentation" src={this.props.collegeLogo} />

            </Link>

          </CollegeLogo>

          <Title>

            {this.props.title}

          </Title>

        </InnerWrap>

      </BannerContainer>

    );

  }

}

Banner.propTypes = {

  coverImage: PropTypes.string,

  bannerColor: PropTypes.string,

  title: PropTypes.string,

  collegeLogo: PropTypes.string,

  logoLink: PropTypes.string,

};

export default Banner;
