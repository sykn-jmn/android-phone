import { createSlice } from '@reduxjs/toolkit';

export const wifiSlice = createSlice({
  name: 'wifi',
  initialState: {
    isOn: false,
    connectedNetwork: null,
  },
  reducers: {
    turnOn: (state) => {
      state.isOn = true;
    },
    turnOff: (state) => {
      state.isOn = false;
      state.connectedNetwork = null;
    },
    connectTo: (state, action) => {
      if (state.isOn) {
        state.connectedNetwork = action.payload.network;
      }
    },
  },
});

export const selectWifiIsOn = (state) => state.wifi.isOn;

export const selectWifiConnectedNetwork = (state) =>
  state.wifi.connectedNetwork;

export const { turnOn, turnOff, connectTo } = wifiSlice.actions;

export default wifiSlice.reducer;
