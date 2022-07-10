import React from 'react';
import PhoneScreen from './components/PhoneScreen/PhoneScreen';
import styles from "./App.module.scss";
import NotificationBar from './components/NotificationBar/NotificationBar';
import MainBody from './components/MainBody/MainBody';
import FooterControl from './components/FooterControl/FooterControl';

const App = () => (
  <div className={styles["App"]}>
    <PhoneScreen>
      <NotificationBar/>
      <MainBody/>
      <FooterControl/>
    </PhoneScreen>
  </div>
  )

export default App;
