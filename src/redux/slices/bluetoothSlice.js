import { createSlice } from '@reduxjs/toolkit';

const bluetoothSlice = createSlice({
  name: 'bluetooth',
  initialState: {
    isOn: true,
  },
  reducers: {
    turnOn: (state) => {
      state.isOn = true;
    },
    turnOff: (state) => {
      state.isOn = false;
    },
  },
});

export const selectBluetoothIsOn = (state) => state.bluetooth.isOn;

export default bluetoothSlice.reducer;
