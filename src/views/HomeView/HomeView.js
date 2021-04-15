import React from 'react';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

const HomeView = () => (
  <div style={styles.container}>
    <h1 style={styles.title}>
    The Phone Book 
    is now a multi-
    platform proposition.{' '}
    </h1>
    <p> You don't need to pick up the printed version to use it. 
    We're online.</p>
  </div>
);

export default HomeView;