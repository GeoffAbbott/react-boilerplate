import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }
  img{
    width:100%;
  }
  body {
    font-family: 'Open Sans',sans-serif;
    color:#51595d;
    font-size: 16px;
  }
  
  a {
    color:#51595d;
    &:hover{
      opacity:0.8;
    }
  }
  a:hover {
    text-decoration:none;
  }
  
  body.fontLoaded {
    font-family: 'Open Sans',sans-serif;
  }
  
  .cb-grey{
    color: #51595d !important;
  }

  #app {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: 'Open Sans',sans-serif;
    line-height: 1.5em;
  }
  ul{
    padding: 0;
    margin: 0;
    list-style: none;
  }
  .animate{
    -webkit-transition: all 500ms;
    transition: all 500ms;
  }
  .show{
    bottom:0;
  }
`;
