/*
 *
 * BandPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import FourOhFour from 'containers/NotFoundPage';
import { makeSelectBand, makeSelectLoading } from './selectors';
import { loadBand } from './actions';

export class BandPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {

    if (this.props.loading) return (<div>Loading</div>);

    if (!this.props.loading && !this.props.band) return (<FourOhFour />);

    return (

      <div>

        <Helmet

          title={this.props.band.name}

          meta={[

            { name: 'description', content: this.props.band.description },

          ]}

        />

        <h1>{this.props.band ? this.props.band.name : 'LOADING BAND'}</h1>

      </div>

    );

  }

}

BandPage.propTypes = {

  loading: React.PropTypes.bool,

  error: React.PropTypes.oneOfType([

    React.PropTypes.object,

    React.PropTypes.bool,

  ]),

  band: React.PropTypes.oneOfType([

    React.PropTypes.object,

    React.PropTypes.bool,

  ]),

};

export function mapDispatchToProps(dispatch, ownProps) {

  dispatch(loadBand({

    key: 'shopify.url',

    value: ownProps.routeParams.artistName,

  }));

  return {};

}

const mapStateToProps = createStructuredSelector({

  band: makeSelectBand(),

  loading: makeSelectLoading(),

});

export default connect(mapStateToProps, mapDispatchToProps)(BandPage);
