import React from 'react';
import s from './HomeView.module.css';

const HomeView = () => (
  <div className={s.container}>
    <h1 className={s.title}>
    The Phone Book <br /> is now a multi-<br /> platform proposition.{' '}
    </h1>
    <p className={s.text}> You don't need to pick up the printed version to use it.<br /> We're online.</p>
  </div>
);

export default HomeView;