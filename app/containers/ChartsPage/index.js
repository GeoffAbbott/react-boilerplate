/*
 *
 * Chart
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import ChartItem from 'components/ChartItem';
import makeSelectChart from './selectors';
import { loadChart } from './actions';

export class Chart extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {

    console.log(this.props.chart.chart);

    return (
      <div>
        <Helmet
          title="Chart"
          meta={[
            { name: 'description', content: 'Description of Chart' },
          ]}
        />
        <h5>{this.props.chart.chart ? this.props.chart.chart.map((item, index) => <ChartItem key={index} item={item}></ChartItem>) : 'Loading' }</h5>
      </div>
    );
  }
}

Chart.propTypes = {

  dispatch: PropTypes.func.isRequired,

  chart: React.PropTypes.oneOfType([

    React.PropTypes.object,

    React.PropTypes.bool,

  ]),

};

const mapStateToProps = createStructuredSelector({

  chart: makeSelectChart(),

});

function mapDispatchToProps(dispatch, ownProps) {

  dispatch(loadChart({

    type: ownProps.routeParams.type,

  }));

  return {
    dispatch,
  };

}

export default connect(mapStateToProps, mapDispatchToProps)(Chart);
