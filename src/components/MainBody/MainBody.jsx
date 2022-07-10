import React from 'react';
import PropTypes from 'prop-types';
import styles from './MainBody.module.scss';
import FavoritesTray from '../FavoritesTray/FavoritesTray';
import PageIndicator from '../PageIndicator/PageIndicator';
import AppMenu from '../AppMenu/AppMenu';

const MainBody = () => (
    <div className={styles["MainBody"]}>
      <AppMenu/>
      <PageIndicator/>
      <FavoritesTray/>
    </div>
  )

MainBody.propTypes = {}

export default MainBody