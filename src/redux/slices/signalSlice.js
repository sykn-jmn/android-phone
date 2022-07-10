import { createSlice } from '@reduxjs/toolkit';

const signalSlice = createSlice({
  name: 'signal',
  initialState: {
    level: 3,
  },
  reducers: {
    setSignalLevel: (state, payload) => {
      state.level = payload.level;
    },
  },
});

export const { setSignalLevel } = signalSlice.actions;

export const selectSignalLevel = (state) => state.signal.level;

export default signalSlice.reducer;
