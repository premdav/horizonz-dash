import React, { Component } from 'react';
import './App.css';
import styled, { css } from 'styled-components';
import Welcome from './WelcomeMessage';
import AppLayout from './AppLayout';
import Navigation from './Navigation';

class App extends Component {
  render() {
    return (
      <AppLayout>
        <Navigation />
        <Welcome />
      </AppLayout>
      
    );
  }
}

export default App;
