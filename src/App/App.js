import React, { Component } from 'react';
import './App.css';
import styled, { css } from 'styled-components';
import Welcome from './WelcomeMessage';

class App extends Component {
  render() {
    return (
      <div>
        <Welcome />
      </div>
      
    );
  }
}

export default App;
