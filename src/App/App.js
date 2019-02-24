import React, { Component } from 'react';
import './App.css';
import styled, { css } from 'styled-components';
import { AppProvider } from './AppProvider';
import Welcome from './WelcomeMessage';
import AppLayout from './AppLayout';
import Navigation from './Navigation';

class App extends Component {
  render() {
    return (
      <AppLayout>
        <AppProvider>
          <Navigation />
          <Welcome />
        </AppProvider>
      </AppLayout>
      
    );
  }
}

export default App;
