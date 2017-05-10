/*
 *
 * NewsPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { makeSelectNews } from './selectors';
import { loadNews } from './actions';

export class NewsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {

    console.log('render', this.props);

    return (

      <div>

        <Helmet
          title="NewsPage"
          meta={[
            { name: 'description', content: 'Description of NewsPage' },
          ]}
        />

        <h1>CollegeBand News</h1>

        <div>{this.props.articles ? this.props.articles.length : 'Loading'}</div>

      </div>

    );

  }

}

NewsPage.propTypes = {

  dispatch: PropTypes.func.isRequired,

  articles: React.PropTypes.oneOfType([

    React.PropTypes.array,

    React.PropTypes.bool,

  ]),

};

const mapStateToProps = createStructuredSelector({

  articles: makeSelectNews(),

});

function mapDispatchToProps(dispatch) {

  dispatch(loadNews());

  return {

    dispatch,

  };

}

export default connect(mapStateToProps, mapDispatchToProps)(NewsPage);
