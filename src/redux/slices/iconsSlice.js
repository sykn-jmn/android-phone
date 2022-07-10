import { createSlice } from '@reduxjs/toolkit';

const iconsSlice = createSlice({
  name: 'icons',
  initialState: {
    apps: [
      {
        id: 'tiktok',
        iconImg: '/icons/tiktok.png',
        name: 'Tiktok',
        x: 0,
        y: 0,
        notifCount: 1,
      },
      {
        id: 'facebook',
        iconImg: '/icons/facebook.jpg',
        name: 'Facebook',
        x: 1,
        y: 0,
        notifCount: 5,
      },
      {
        id: 'settings',
        iconImg: '/icons/settings.png',
        name: 'Settings',
        x: 2,
        y: 0,
        notifCount: 0,
      },
      {
        id: 'reddit',
        iconImg: '/icons/reddit.png',
        name: 'Reddit',
        x: 3,
        y: 0,
        notifCount: 0,
      },
      {
        id: 'spotify',
        iconImg: '/icons/spotify.png',
        name: 'Spotify',
        x: 0,
        y: 1,
        notifCount: 0,
      },
      {
        id: 'messenger',
        iconImg: '/icons/messenger.webp',
        name: 'Messenger',
        x: 1,
        y: 1,
        notifCount: 3,
      },
      {
        id: 'chrome',
        iconImg: '/icons/chrome.png',
        name: 'Chrome',
        x: 2,
        y: 1,
        notifCount: 0,
      },
      {
        id: 'discord',
        iconImg: '/icons/discord.png',
        name: 'Discord',
        x: 3,
        y: 1,
        notifCount: 0,
      },
    ],
    favorites: ['messenger', 'discord', 'chrome', 'spotify'],
  },
  reducers: {},
});

export const selectApps = (state) => state.icons.apps;

export const selectFavoriteApps = (state) =>
  state.icons.apps.filter((app) => state.icons.favorites.includes(app.id));

export default iconsSlice.reducer;
