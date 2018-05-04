import React, { Component } from 'react';
import styled from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Route, Switch, withRouter } from 'react-router-dom';

import First from './components/First';
import Second from './components/Second';

const Wrapper = styled.div`

`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <TransitionGroup>
          <CSSTransition
            timeout={{ enter: 300, exit: 300 }}
            classNames="fade"
          >
          </CSSTransition>
        </TransitionGroup>        
      </Wrapper>
    );
  }
}

export default App;
