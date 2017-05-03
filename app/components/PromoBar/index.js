/**
*
* PromoBar
*
*/

import React from 'react';
import styled from 'styled-components';
import styles from 'style-utils';

console.log(styles);

const Bar = styled.div`
  line-height: 50px;
  position: relative;
  z-index: 11;
  text-align: center;
  color: #FFF;
  letter-spacing: 2px;
  background-color:${styles.chetWoedBlue}
`;

function PromoBar() {
  return (
    <Bar className="promo-bar">
      Free shipping for orders over $50
    </Bar>
  );
}

PromoBar.propTypes = {

};

export default PromoBar;
