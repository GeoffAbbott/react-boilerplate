/**
*
* ChartItem
*
*/

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';

const ChartItemConatiner = styled.div`
  width:100%;
  height:50px;
`;

class ChartItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {

    return (

      <ChartItemConatiner>

        <Link to={'/' + this.props.item._id.shopify.url}>

          { this.props.item._id.name }

        </Link>

      </ChartItemConatiner>
    );
  }
}

ChartItem.propTypes = {

  item: PropTypes.object.isRequired,

};

export default ChartItem;
