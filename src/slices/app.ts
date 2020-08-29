import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';

import { IPage, IVideo } from 'types';

interface AppState {
  loggedIn: boolean;
  accessToken: string;
  userId: string;
  pages: IPage[];
  pageId: string;
  pageAccessToken: string;
  liveVideos: IVideo[];
  liveVideoId: string;
}

const initialState: AppState = {
  loggedIn: false,
  accessToken: '',
  userId: '',
  pages: [],
  pageId: '',
  pageAccessToken: '',
  liveVideos: [],
  liveVideoId: '',
};

interface ISetLoginData {
  accessToken: string;
  userId: string;
}

const defaultTimeline = (access_token: string): IPage => ({
  id: 'me',
  name: 'Default Timeline',
  access_token:
    'EAAIP03TKZBtEBAF1xmOaEoeoF6gQ2bNYsVOrZCjFoYcf0S2ZAKNVW3p3ZBsD5ZCjUZCpAmwV7FqfZC0yeAUzE4ftM9x2qON5oZCAr4ptGyvfWHn0zohnEPZBBSXsMmIO6bf6I0SDxpZCRbzIFHmN0Lfd0N1HpfUZAEuwsPypnRW9NEvC9cZAgBTsVlPJoSnX1MJHjXUZD',
});

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoginState: (
      state,
      { payload: { accessToken, userId } }: PayloadAction<ISetLoginData>
    ) => {
      const loggedIn = Boolean(accessToken && userId);

      Object.assign(state, {
        accessToken,
        userId,
        loggedIn,
      });
    },
    setPages: (state, { payload: pages }: PayloadAction<IPage[]>) => {
      state.pages = [defaultTimeline(state.accessToken), ...pages];
    },
    setPageId: (state, { payload: pageId }: PayloadAction<string>) => {
      const pageInfo = state.pages.find((page) => page.id === pageId);

      if (pageInfo) {
        state.pageId = pageId;
        state.pageAccessToken = pageInfo.access_token;
      }
    },
    setLiveVideos: (
      state,
      { payload: liveVideos }: PayloadAction<IVideo[]>
    ) => {
      state.liveVideos = liveVideos;
    },
    setLiveVideoId: (
      state,
      { payload: liveVideoId }: PayloadAction<string>
    ) => {
      state.liveVideoId = liveVideoId;
    },
  },
});

export const {
  setLoginState,
  setPages,
  setPageId,
  setLiveVideos,
  setLiveVideoId,
} = appSlice.actions;

export const get = {
  loggedIn: (state: RootState) => state.app.loggedIn,
  pages: (state: RootState) => state.app.pages,
  pageId: (state: RootState) => state.app.pageId,
  pageAccessToken: (state: RootState) => state.app.pageAccessToken,
  liveVideos: (state: RootState) => state.app.liveVideos,
  liveVideoId: (state: RootState) => state.app.liveVideoId,
};

export default appSlice.reducer;
