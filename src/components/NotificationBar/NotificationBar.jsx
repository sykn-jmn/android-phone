import React from 'react'
import { Icon } from '@iconify/react';
import { useSelector } from 'react-redux';
import styles from "./NotificationBar.module.scss";
import { selectBluetoothIsOn } from '../../redux/slices/bluetoothSlice';
import { selectBatteryPercentage } from '../../redux/slices/batterySlice';
import BatteryIcon from '../BatteryIcon/BatteryIcon';
import SimSignalIcon from '../SimSignalIcon/SimSignalIcon';
import { selectSignalLevel } from '../../redux/slices/signalSlice';

const NotificationBar = () => {
  const time = new Date().toLocaleTimeString(
    'en-US', { 
      hourCycle:"h24",
      hour:"numeric",
      minute:"numeric"
    });

  const bluetoothIsOn = useSelector(selectBluetoothIsOn);
  const signalLevel = useSelector(selectSignalLevel);
  const batteryPercentage = useSelector(selectBatteryPercentage);

  return (
    <div className={styles["NotificationBar"]}>
      <section className={[
        styles["Section"], 
        styles["Section_left"]
      ].join(" ")} >
        <p className={styles["Time"]}>
          {time}
        </p>
      </section>
      <section className={[
        styles["Section"], 
        styles["Section_right"]
      ].join(" ")}  >
        <Icon 
          icon="clarity:alarm-clock-solid" 
          className={styles["Icon"]}
        />
        <Icon 
          icon="bxs:bell-off" 
          className={styles["Icon"]}
        />
        {bluetoothIsOn && <Icon 
          icon="bx:bluetooth"  
          className={styles["Icon"]}
        />}
        <SimSignalIcon signalLevel={signalLevel}/>
        <BatteryIcon batteryPercentage={batteryPercentage}/>
      </section>
    </div>
  )}
  

export default NotificationBar