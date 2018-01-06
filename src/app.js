import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import Routes from './routes';

const app = () => (
  <div>
    <Router>
      <div>
        <AppHeader />
        <Routes />
        <AppFooter />
      </div>
    </Router>
  </div>
);

export default app;
