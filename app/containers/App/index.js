/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

import NavBar from 'components/NavBar';
import PromoBar from 'components/PromoBar';
import Footer from 'components/Footer';
import AudioPlayer from 'components/Player';

const AppWrapper = styled.div`

`;

const MainCol = styled.div`
  max-width: calc(1200px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
  min-height:100vh;
`;

export default class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {

    return (

      <AppWrapper>

        <Helmet
          titleTemplate="%s - The World's Smartest Company"
          defaultTitle="CollegeBand - The World's Smartest Company"
          meta={[
            { name: 'description', content: 'Big Dog on Campus' },
          ]}
        />

        <PromoBar />

        <MainCol>

          <NavBar />

          {React.Children.toArray(this.props.children)}

        </MainCol>

        <Footer />

        <AudioPlayer />

      </AppWrapper>

    );
  }
}
