/*
 *
 * Chart
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { createStructuredSelector } from 'reselect';
import ChartItem from 'components/ChartItem';
import { makeSelectChart, makeSelectLoading } from './selectors';
import { loadChart } from './actions';

const ChartWrap = styled.div`
`;

export class Chart extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {

    if (this.props.loading) return (<h5>Loading {this.props.routeParams.type}s chart...</h5>);

    if (!this.props.loading && !this.props.chart) return (<h5>Error retrieving chart</h5>);

    return (

      <div>

        <Helmet
          title={`Top ${this.props.routeParams.type}s CHART`}
          meta={[
            { name: 'description', content: 'Description of Chart' },
          ]}
        />

        <ChartWrap>{this.props.chart.map((item, index) => <ChartItem itemType={this.props.routeParams.type} key={index} rank={index + 1} item={item}></ChartItem>)}</ChartWrap>

      </div>

    );

  }

}

Chart.propTypes = {

  loading: React.PropTypes.bool,

  dispatch: PropTypes.func.isRequired,

  routeParams: PropTypes.object,

  chart: React.PropTypes.oneOfType([

    React.PropTypes.array,

    React.PropTypes.bool,

  ]),

};

const mapStateToProps = createStructuredSelector({

  chart: makeSelectChart(),

  loading: makeSelectLoading(),

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
