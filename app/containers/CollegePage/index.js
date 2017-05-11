/*
 *
 * CollegePage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import Artist from 'models/Artist';
import Banner from 'components/Banner';
import ListArtistItem from 'components/ListArtistItem';
import { makeSelectCollege, makeSelectBands, makeSelectLoading } from './selectors';
import { loadCollege } from './actions';

export class CollegePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {

    if (this.props.loading) return (<h5>Loading College...</h5>);

    return (

      <div>

        <Helmet
          title="CollegePage"
          meta={[
            { name: 'description', content: 'Description of CollegePage' },
          ]}
        />

        <Banner bannerColor={this.props.college.colors.primary} coverImage={this.props.college.name} title={this.props.college.name} />

        <div>
          {this.props.bands.map((artist, index) => { return (<ListArtistItem key={`artist-list-item-${index}`} artist={new Artist(artist)} />); })}
        </div>

      </div>

    );

  }

}

CollegePage.propTypes = {

  dispatch: PropTypes.func.isRequired,

  loading: React.PropTypes.bool,

  error: React.PropTypes.oneOfType([

    React.PropTypes.object,

    React.PropTypes.bool,

  ]),

  college: React.PropTypes.oneOfType([

    React.PropTypes.object,

    React.PropTypes.bool,

  ]),

  bands: React.PropTypes.oneOfType([

    React.PropTypes.array,

    React.PropTypes.bool,

  ]),

};

const mapStateToProps = createStructuredSelector({

  college: makeSelectCollege(),

  bands: makeSelectBands(),

  loading: makeSelectLoading(),

});

function mapDispatchToProps(dispatch, ownProps) {

  dispatch(loadCollege({

    key: 'shopify.url',

    value: ownProps.routeParams.handle,

  }));

  return {

    dispatch,

  };

}

export default connect(mapStateToProps, mapDispatchToProps)(CollegePage);
