import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import useEffectOnce from 'hooks/useEffectOnce';
import Button from '@material-ui/core/Button';

import CONFIG from 'const/config';

import * as appActions from 'slices/app';

interface IFBData {
  accessToken: string;
  userID: string;
}

interface IFBloginResult {
  authResponse: IFBData;
  status: string;
}

const _window = window as any;

export default (props: any) => {
  const dispatch = useDispatch();

  const checkLoginStatus = useCallback(
    ({ authResponse, status }: IFBloginResult) => {
      if (status === 'connected') {
        const { accessToken, userID: userId } = authResponse;

        dispatch(appActions.setLoginState({ accessToken, userId }));
      }
    },
    [dispatch]
  );

  const onClickLogin = useCallback(() => {
    _window.FB.login(checkLoginStatus);
  }, [checkLoginStatus]);

  useEffectOnce(() => {
    _window.FB.init({
      appId: CONFIG.fb.appId,
      autoLogAppEvents: true,
      xfbml: true,
      version: CONFIG.fb.version,
    });

    _window.FB.getLoginStatus(checkLoginStatus);
  });

  return (
    <Button variant='contained' color='primary' onClick={onClickLogin}>
      Login to Facebook
    </Button>
  );
};
