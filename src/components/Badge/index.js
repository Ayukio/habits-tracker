import React from 'react';
import classNames from 'classnames';

import styles from './Badge.module.scss'

const Badge = ({ color, onClick, classTitle }) => {
  return (
      <i onClick={onClick} className={`${styles.badge}   ${styles[color]} ${classTitle ? classTitle : ''}`}></i>
  )
}

export default Badge;