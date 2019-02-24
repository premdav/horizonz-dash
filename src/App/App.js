import React, { Component } from 'react';
import './App.css';
import { AppProvider } from './AppProvider';
import AppLayout from './AppLayout';
import Navigation from './Navigation';
import Settings from '../Settings/Settings';

class App extends Component {
  render() {
    return (
      <AppLayout>
        <AppProvider>
          <Navigation />
          <Settings />
        </AppProvider>
      </AppLayout>
      
    );
  }
}

export default App;
