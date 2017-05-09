/**
*
* ChartItem
*
*/

import React, { PropTypes } from 'react';
import styled from 'styled-components';

const ChartItemConatiner = styled.div`
  width:100%;
  height:50px;
`;

class ChartItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {

    console.log(this.props.item);

    return (
      <ChartItemConatiner>
        {this.props.item._id.name}
      </ChartItemConatiner>
    );
  }
}

ChartItem.propTypes = {

  item: PropTypes.object.isRequired,

};

export default ChartItem;
