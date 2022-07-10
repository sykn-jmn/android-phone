import React from 'react'
import PropTypes from 'prop-types'
import styles from './PageIndicator.module.scss';

const PageIndicator = () => {
  const pageNumber = 1;
  return (
    <div className={styles["PageIndicator"]}>
      <div className={[
        styles["PageIndicator-Bubble"],
        pageNumber===1 && styles["PageIndicator-Bubble_active"]
      ].join(" ")}/>
      <div className={[
        styles["PageIndicator-Bubble"],
        pageNumber===2 && styles["PageIndicator-Bubble_active"]
      ].join(" ")}/>
      <div className={[
        styles["PageIndicator-Bubble"],
        pageNumber===3 && styles["PageIndicator-Bubble_active"]
      ].join(" ")}/>
    </div>
  )
}
PageIndicator.propTypes = {}

export default PageIndicator