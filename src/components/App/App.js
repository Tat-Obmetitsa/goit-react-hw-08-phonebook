import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Container from '../Container';
import ContactsView from '../../views/ContactsView/ContactsView.js';
// import HomeView from '../../views/HomeView/HomeView.js';
import LoginView from '../../views/LoginView/LoginView.js';
import RegisterView from '../../views/RegisterView/RegisterView.js';
import AppBar from '../AppBar/AppBar';
import {routes} from '../../routes';
import { authOperations } from '../../redux/auth';
import { connect } from 'react-redux';


class App extends Component {
  componentDidMount() {
    this.props.onGetCurretnUser();
  }

  render() {
    return (
      <Container>
        <AppBar />
        <Switch>
          {/* <Route exact path={routes.home} component={HomeView} /> */}
          <Route path={routes.register} component={RegisterView} />
          <Route path={routes.login} component={LoginView} />
          <Route path={routes.contacts} component={ContactsView} />
        </Switch>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  onGetCurretnUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);