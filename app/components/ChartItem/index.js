/**
*
* ChartItem
*
*/

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router';
import { prepareTrackToPlay } from 'containers/App/actions';
import styles from '../../style-utils';

const PaddedWrap = styled.div`
  margin: 7px 0;
  padding-bottom: 7px;
  border-bottom: #d8d8d8 thin solid;
`;

const ChartItemWrap = styled.table`
  width:100%
`;

const ChartItemSection = styled.td`
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
`;

const Rank = styled(ChartItemSection)`
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width:63px;
  text-align:center;
`;

const Number = styled.div`
  line-height: 60px;
  font-size: 35px;
  font-weight: 600;
  width:115px;
`;

const Image = styled(ChartItemSection)`
  width: 80px;
  height: 80px;
  float: left;
  margin-right: 15px;
  position: relative;
`;

const LastWeek = styled.div`
  font-size: 11px;
  white-space: nowrap;
  color: #999;
`;

const Banger = styled(Link)`
  color:${styles.chetWoedBlue};
  width:100%;
`;

const SubBanger = styled.div`
  width:100%;
`;

const SubSubBanger = styled.div`
  color:#999;
  width:100%;
  a{
    color:#999;
  }
`;

class ChartItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  getImage() {

    switch (this.props.itemType) {

      case 'track':

        return (<img alt="Cool stuff" src={this.props.item.Album ? this.props.item.Album.coverUrl : ''} />);

      case 'band':

        return (<img alt="Cool stuff" src={this.props.item._id.logoUrl} />);

      case 'album':

        return (<img alt="Cool stuff" src={this.props.item._id.coverUrl} />);

      case 'college':

        return (<img alt="Cool stuff" src={this.props.item._id.logoUrl} />);

      default:

        return (<div>Blop</div>);
    }

  }

  getBanger() {

    switch (this.props.itemType) {

      case 'track':

        return (<Banger to={`/${this.props.item.Album.shopify.url}`}>{this.props.item._id.name}</Banger>);

      case 'college':

        return (<Banger to={`/college/${this.props.item._id.shopify ? this.props.item._id.shopify.url : null}`}>{this.props.item._id.name}</Banger>);

      default:

        return (<Banger to={`/product/${this.props.item._id.shopify ? this.props.item._id.shopify.url : null}`}>{this.props.item._id.name}</Banger>);
    }

  }

  getSubBanger() {

    switch (this.props.itemType) {

      case 'track':

        return (<SubBanger>

          <Link to={`/${this.props.item.Band.shopify.url}`}>

            {this.props.item.Band.name}

          </Link> - <Link to={`/product/${this.props.item.Album.shopify.url}`}>

            {this.props.item.Album.name}

          </Link>

        </SubBanger>);

      case 'band':

        return (<SubBanger>

          <Link to={`/college/${this.props.item._id.colleges && this.props.item._id.colleges[0].shopify ? this.props.item._id.colleges[0].shopify.url : null}`}>

            {this.props.item._id.colleges[0].name}

          </Link>

        </SubBanger>);

      case 'album':

        return (<SubBanger>

          <Link to={`/${this.props.item.Band.shopify.url}`}>

            {this.props.item.Band.name}

          </Link>

        </SubBanger>);

      case 'college':

        return (<div></div>);

      default:

        return (<div>Error loading second line</div>);
    }

  }

  getSubSubBanger() {

    switch (this.props.itemType) {

      case 'track':

        return (<SubSubBanger>

          <Link to={`/college/${this.props.item.Band.colleges[0].shopify.url}`}>

            {this.props.item.Band.colleges[0].name}

          </Link> - {this.props.item.Band.year}

        </SubSubBanger>);

      case 'band':

        return (

          <SubSubBanger>

            {this.props.item._id.activeStart} - {this.props.item._id.activeEnd}

          </SubSubBanger>

        );

      case 'album':

        return (<SubSubBanger>

          <Link to={`/college/${this.props.item.Band.colleges[0].shopify.url}`}>

            {this.props.item.Band.colleges[0].name}

          </Link> - {this.props.item.Band.activeStart} - {this.props.item.Band.activeEnd}

        </SubSubBanger>);

      case 'college':

        return (<div></div>);

      default:

        return (<div>Error loading year</div>);
    }

  }

  render() {

    return (

      <PaddedWrap>

        <ChartItemWrap>

          <tbody>

            <tr>

              <Rank>

                <Number>

                  {this.props.rank}

                </Number>

                <LastWeek>

                  Last Week: {this.props.item.lastWeek || '--'}

                </LastWeek>

              </Rank>

              <Image>

                {this.getImage()}

              </Image>

              <ChartItemSection width="100%">

                {this.getBanger()}

                {this.getSubBanger()}

                {this.getSubSubBanger()}

              </ChartItemSection>

            </tr>

          </tbody>

        </ChartItemWrap>

      </PaddedWrap>

    );
  }
}

ChartItem.propTypes = {

  item: PropTypes.object.isRequired,

  handleTrackClicked: PropTypes.func,

  rank: PropTypes.number,

  itemType: PropTypes.string.isRequired,

};

export function mapDispatchToProps(dispatch) {

  return {

    handleTrackClicked: (track) => dispatch(prepareTrackToPlay(track.tracks[0].track._id)),

  };

}

export default connect(null, mapDispatchToProps)(ChartItem);
