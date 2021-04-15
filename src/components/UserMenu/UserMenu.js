import React from 'react';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from './default-avatar.png';

const s = {
  container: {
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    fontWeight: 700,
    fontSize: 15,
    color: '#813a5a'
},
  avatar: {
    borderRadius: '50%',
    margin: 0
  },
  name: {
    marginRight: 12,
    marginLeft: 12
  },
  button: {
    display: 'inline-block',
    alignItems: 'center',
    textAlign: 'center',
    background: '#ff0081',
    border: 'none',
    borderRadius: 20,
    color: '#fff',
    outline: 'none',
    cursor: 'pointer'
  }
}
const UserMenu = ({ avatar, name, onLogout }) => (
  <div style={s.container}>
    <img 
    src={avatar}
    style={s.avatar}
    alt="default avatar" 
    width="32" />
    <span style={s.name}>Welcome, {name}</span>
    <button type="button" onClick={onLogout} style={s.button}>
      Logout
    </button>
  </div>
);
const mapStateToProps = state => ({
  name: authSelectors.getUsername(state),
  avatar: defaultAvatar,
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);