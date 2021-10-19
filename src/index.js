import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Grommet } from 'grommet';
import styled from 'styled-components';
import reportWebVitals from './reportWebVitals';

import App from './App';
import theme from './theme'

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBELr5qtUCFs6KtiCxegUR2MrE_qS9QCCw",
  authDomain: "codename-paco-lobo.firebaseapp.com",
  projectId: "codename-paco-lobo",
  storageBucket: "codename-paco-lobo.appspot.com",
  messagingSenderId: "896826417895",
  appId: "1:896826417895:web:9fb0c9ce771da1d5f6b842",
  measurementId: "G-SECX375P8Z"
};

// Initialize Firebase
initializeApp(firebaseConfig);

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