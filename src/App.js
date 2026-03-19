import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import Dashboard from './components/Dashboard';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import { CircularProgress } from '@material-ui/core';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={SignupForm} />
          <Route render={() => <CircularProgress />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
