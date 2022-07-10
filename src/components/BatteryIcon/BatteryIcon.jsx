import React from 'react';
import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';
import styles from './BatteryIcon.module.scss';

const BatteryIcon = ({ batteryPercentage }) => {
  const getBatteryIcon = (percentage) => {
    if( percentage < 20 ) return "fa:battery-0";
    if( percentage < 40 ) return "fa:battery-1";
    if( percentage < 60 ) return "fa:battery-2";
    if( percentage < 80 ) return "fa:battery-3";
    return "fa:battery";
  }
  return (
    <Icon 
      icon={getBatteryIcon(batteryPercentage)}
      className={styles["BatteryIcon"]}
    />
  )
}

BatteryIcon.propTypes = {
  batteryPercentage: PropTypes.number
}

BatteryIcon.defaultProps = {
  batteryPercentage: 0
}

export default BatteryIcon