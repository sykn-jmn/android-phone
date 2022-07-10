import { combineReducers } from '@reduxjs/toolkit';
import wifiReducer from './slices/wifiSlice';
import batteryReducer from './slices/batterySlice';
import bluetoothReducer from './slices/bluetoothSlice';
import signalReducer from './slices/signalSlice';
import iconsReducer from './slices/iconsSlice';

export default combineReducers({
  wifi: wifiReducer,
  battery: batteryReducer,
  bluetooth: bluetoothReducer,
  signal: signalReducer,
  icons: iconsReducer,
});
