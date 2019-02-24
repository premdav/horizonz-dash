import React, { Component } from 'react';
import './App.css';
import { AppProvider } from './AppProvider';
import AppLayout from './AppLayout';
import Navigation from './Navigation';
import Settings from '../Settings/Settings';
import Content from '../Shared/Content';

class App extends Component {
  render() {
    return (
      <AppLayout>
        <AppProvider>
          <Navigation />
          <Content>
            <Settings />
          </Content>
        </AppProvider>
      </AppLayout>
      
    );
  }
}

export default App;
