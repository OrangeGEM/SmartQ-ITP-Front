import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import { createGlobalStyle } from "styled-components";

import LP from './LP/LP';

const GlobalStyles = createGlobalStyle`
  body{
    margin: 0;
  }
`;

export default function App() {
  return (
    <Router>
      <GlobalStyles />
      <LP />
    </Router>
  );
}

