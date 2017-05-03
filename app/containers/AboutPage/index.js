/*
 *
 * AboutPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

export class AboutPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
      </div>
    );
  }
}

AboutPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(AboutPage);
