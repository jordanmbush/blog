import React, { Component } from 'react';
import routes from './routes'
import './reset.css'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='app-entry-point'>
        {routes}
      </div>
    );
  }
}

export default App;
