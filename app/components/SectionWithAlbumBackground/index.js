import styled from 'styled-components';
import img from './image.jpg';

const Section = styled.section`
  min-height:550px;
  background-image:url(${img});
  background-size:cover;
  background-size: 100% auto;
  display: table;
  width:100%;
  margin-top: 50px;
`;

export default Section;
