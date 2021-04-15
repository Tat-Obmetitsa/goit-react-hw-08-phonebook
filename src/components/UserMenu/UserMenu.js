import React from 'react';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from './default-avatar.png';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';

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
  svg: {
    width: 30,
    height: 30,
    display: 'block',
    background: 'transparent',
    color: '#E84A5F',
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
    <ExitToAppOutlinedIcon onClick={onLogout} style={s.svg} />
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