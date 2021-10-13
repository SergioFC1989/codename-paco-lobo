import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Grommet } from 'grommet';
import styled from 'styled-components';
import reportWebVitals from './reportWebVitals';

import App from './App';

import theme from './theme'

const StyledGrommet = styled(Grommet)`
  height: 100%;
  width: 100%;
`;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <StyledGrommet theme={theme}>
        <App />
      </StyledGrommet>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();