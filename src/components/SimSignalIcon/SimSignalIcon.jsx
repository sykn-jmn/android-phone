import React from 'react';
import PropTypes from 'prop-types';
import styles from './SimSignalIcon.module.scss';

const SimSignalIcon = ({ signalLevel }) => (
    <div className={styles["SimSignalIcon"]}>
      <div className={[
        styles["SignalBar"], 
        styles["SignalBar_level_0"],
        signalLevel > 0 && styles["SignalBar_active"]]
        .join(" ")}
      />
      <div className={[
        styles["SignalBar"], 
        styles["SignalBar_level_1"],
        signalLevel > 1 && styles["SignalBar_active"]]
        .join(" ")}
      />
      <div className={[
        styles["SignalBar"], 
        styles["SignalBar_level_2"],
        signalLevel > 2 && styles["SignalBar_active"]]
        .join(" ")}
      />
      <div className={[
        styles["SignalBar"], 
        styles["SignalBar_level_3"],
        signalLevel > 3 && styles["SignalBar_active"]]
        .join(" ")}
      />
    </div>
  )

SimSignalIcon.propTypes = {
  signalLevel: PropTypes.number
}

SimSignalIcon.defaultProps = {
  signalLevel:0
}
export default SimSignalIcon