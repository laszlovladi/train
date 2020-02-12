import React from 'react';
import ReactDOM from 'react-dom';
import { Carriage } from './carriage/carriage.jsx';
import './index.css';
import './index.html';

class App extends React.Component {
  render() {
    return (
      <Carriage />
    );
  }
};

ReactDOM.render(<App />, document.getElementById('app'));