import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux'
import 'react-toastify/dist/ReactToastify.css';

import store from '@store';
import Home from '@views/home/Home'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: monospace;
  }
  body {
    background-color: #1E272D;
  }
`

ReactDOM.render(
  <Provider store={store}> 
    <GlobalStyle />
    <Home />
    <ToastContainer />
  </Provider >
  ,
  document.getElementById('root')
);
