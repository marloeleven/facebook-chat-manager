import { Action } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { push } from 'connected-react-router';

import { combineEpics, Epic, ofType } from 'redux-observable';
import { defer, of, empty, concat } from 'rxjs';
import {
  switchMap,
  tap,
  filter,
  ignoreElements,
  map,
  distinctUntilChanged,
} from 'rxjs/operators';

import isEmpty from 'lodash/isEmpty';

import fbApi from 'api/fb';

import * as appActions from 'slices/app';

import { connect$ } from 'observables/messages';

const setLoginEpic: Epic<Action, Action, RootState> = (action$, state$) =>
  action$.pipe(
    ofType(appActions.setLoginState),
    switchMap(() =>
      defer(() => {
        const { loggedIn, userId, accessToken } = state$.value.app;

        if (loggedIn) {
          return fbApi.getPages(userId, accessToken);
        }

        return [];
      }).pipe(
        switchMap((pages) => {
          if (pages.length) {
            return of(appActions.setPages(pages));
          }

          return empty();
        })
      )
    )
  );

const setPagesEpic: Epic<Action, Action, RootState> = (action$, state$) =>
  action$.pipe(
    ofType(appActions.setPages),
    switchMap(() => of(push('/pages')))
  );

const setPageIdEpic: Epic<Action, Action, RootState> = (action$, state$) =>
  action$.pipe(
    ofType(appActions.setPageId),
    switchMap(() =>
      defer(() => {
        const { pageId, pageAccessToken: accessToken } = state$.value.app;

        if (!isEmpty(pageId)) {
          return fbApi.getLiveVideos(pageId, accessToken);
        }

        return [];
      }).pipe(
        switchMap((liveVideos) => {
          return of(appActions.setLiveVideos(liveVideos));
        })
      )
    )
  );

const setLiveVideosEpic: Epic<Action, Action, RootState> = (action$, state$) =>
  action$.pipe(
    ofType(appActions.setLiveVideos),
    switchMap(() => of(push('/videos')))
  );

const setLiveVideoIdEpic: Epic<Action, Action, RootState> = (action$, state$) =>
  action$.pipe(
    ofType(appActions.setLiveVideoId),
    switchMap(() => of(push('/messages')))
  );

const stateChangeEpic: Epic<Action, Action, RootState> = (action$, state$) =>
  state$.pipe(
    map((state) => {
      const {
        app: { liveVideoId, pageAccessToken: accessToken },
      } = state;
      return JSON.stringify({
        liveVideoId,
        accessToken,
      });
    }),
    distinctUntilChanged(),
    tap(() => {
      const {
        app: { liveVideoId, pageAccessToken: accessToken },
      } = state$.value;

      if (liveVideoId && accessToken) {
        connect$.next({ liveVideoId, accessToken });
      }
    }),
    ignoreElements()
  );

export default combineEpics(
  setLoginEpic,
  setPagesEpic,
  setPageIdEpic,
  setLiveVideosEpic,
  setLiveVideoIdEpic,
  stateChangeEpic
);
