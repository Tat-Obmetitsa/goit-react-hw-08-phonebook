import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import {routes} from '../../routes';
import {authSelectors} from '../../redux/auth';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';

const s  = {
  nav: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    textAlighn: 'center'
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
  svg: {
    width: 40,
    height: 40
  }
};
const Navigation = ({isAuthenticated}) => (
  <nav style={s.nav}>
    
    <NavLink to={routes.home} exact
          style={s.link}
          activeStyle={s.activeLink} >
            <HomeOutlinedIcon style={s.svg} />
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