import React, { Component } from 'react';
import './App.css';
import {Container, Divider, Segment} from 'semantic-ui-react';
import AppHeader from './presentational-components/appHeader.js';
import CartContainer from './container-components/cartContainer.js';


class App extends Component {
  render() {
    return (
      <div className="App" style={{backgroundColor: 'rgba(240,240,240)'}}>
        <Container style={{width: '70vw'}}>
          <Segment>
            <div>
              <AppHeader />
            </div>
            <Divider />
            <div>
              <CartContainer />
            </div>
          </Segment>
        </Container>
      </div>
    );
  }
}

export default App;
