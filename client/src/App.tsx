import React from 'react';
import Frontpage from './pages/frontpage/Frontpage';
import { RouteComponentProps, Router } from '@reach/router';
import Dashboard from './pages/dashboard/Dashboard';

const Home: React.FC<RouteComponentProps> = () => <Frontpage />;
const Dash: React.FC<RouteComponentProps> = () => <Dashboard />;

const App = () => {
  return (
    <Router>
      <Home path="/" />
      <Dash path="/dashboard" />
    </Router>
  );
};

export default App;
