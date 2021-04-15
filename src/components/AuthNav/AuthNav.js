import React from 'react';
import { NavLink } from 'react-router-dom';
import {routes} from '../../routes';

const s = {
  link: {
    fontFamily: 'Dancing Script, cursive',
    fontSize: 25,
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#E84A5F'
  },
};

const AuthNav = () => (
    <div  >
      <NavLink
        to={routes.register}
        exact
        style={s.link}
        activeStyle={s.activeLink}
      >
        Registration
      </NavLink>
      <NavLink
        to={routes.login}
        exact
        style={s.link}
        activeStyle={s.activeLink}
      >
        Login
      </NavLink>
    </div>
  );
  
  export default AuthNav;