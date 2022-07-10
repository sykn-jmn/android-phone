import { createSlice } from '@reduxjs/toolkit';

const batterySlice = createSlice({
  name: 'battery',
  initialState: {
    percentage: 20,
  },
  reducers: {},
});

export const selectBatteryPercentage = (state) => state.battery.percentage;

export default batterySlice.reducer;
