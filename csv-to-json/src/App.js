import React from 'react';
import './App.css';
import HomePage from './pages/HomePage/HomePage.component';
import { Switch, Route } from 'react-router-dom';
import ConverterPage from './pages/ConverterPage/ConverterPage.component';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/convert" component={ConverterPage} />
      </Switch>
    </div>


  );
}

export default App;
