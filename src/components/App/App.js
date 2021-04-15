import React, { Component, Suspense, lazy  } from 'react';
import { Switch } from 'react-router-dom';

import Container from '../Container';
import AppBar from '../AppBar/AppBar';
import {routes} from '../../routes';
import { authOperations } from '../../redux/auth';
import { connect } from 'react-redux';
import PrivateRoute from '../PrivateRoute';
import PublicRoute from '../PrivateRoute';

const HomeView = lazy(() => import('../../views/HomeView/HomeView.js'));
const RegisterView = lazy(() => import('../../views/RegisterView/RegisterView.js'));
const LoginView = lazy(() => import('../../views/LoginView/LoginView.js'));
const ContactsView = lazy(() => import('../../views/ContactsView/ContactsView.js'));

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <Container>
      <AppBar />

      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <PublicRoute exact path="/" component={HomeView} />
          <PublicRoute
            path={routes.register}
            restricted
            redirectTo={routes.contacts}
            component={RegisterView}
          />
          <PublicRoute
            path={routes.login}
            restricted
            redirectTo={routes.contacts}
            component={LoginView}
          />
          <PrivateRoute
            path={routes.contacts}
            redirectTo={routes.login}
            component={ContactsView}
          />
        </Switch>
      </Suspense>
    </Container>
    );
  }
}


const mapDispatchToProps = {
  onGetCurretnUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);