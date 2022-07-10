import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import styles from './FooterControl.module.scss';

const FooterControl = () => (
    <div className={styles["FooterControl"]}>
      <Icon icon="cil:hamburger-menu" className={styles["Icon"]}/>
      <Icon icon="akar-icons:box" className={styles["Icon"]}/>
      <Icon icon="ooui:previous-ltr" className={styles["Icon"]}/>
    </div>
  )

FooterControl.propTypes = {}

export default FooterControl