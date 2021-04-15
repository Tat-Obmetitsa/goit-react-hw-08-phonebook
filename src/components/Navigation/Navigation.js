import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import {routes} from '../../routes';
import {authSelectors} from '../../redux/auth'
// import s from './Navigation.module.css';

const s  = {
  nav: {
    display: 'flex',
    flexDirection: 'row',
  },
  link: {
    display: 'flex',
    fontFamily: 'Dancing Script, cursive',
    fontSize: 25,
    flexDirection: 'row',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#E84A5F',
  },
};
const Navigation = ({isAuthenticated}) => (
  <nav style={s.nav}>
    
    <NavLink to={routes.home} exact
          style={s.link}
          activeStyle={s.activeLink} >
      Home
    </NavLink>
    {isAuthenticated && <NavLink
      to={routes.contacts}
      exact
      style={s.link}
      activeStyle={s.activeLink}
    >
      Contacts
    </NavLink>}
   
  </nav>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});


export default connect(mapStateToProps)(Navigation);