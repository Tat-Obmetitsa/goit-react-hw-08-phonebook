import React from 'react';
import s from '../Container/Container.module.css';

const Container = ({ children }) => <div className={s.div}>{children}</div>;

export default Container;