import React, { useCallback } from 'react';

import useEffectOnce from 'hooks/useEffectOnce';
import Button from '@material-ui/core/Button';

import CONFIG from 'const/config';

import { ILogin } from 'contexts/login';

interface IFBData {
  accessToken: string;
  userId: string;
}

interface IFBloginResult {
  authResponse: IFBData;
  status: string;
}

interface IProps {
  loginStatus: boolean;
  onClickLogin: Function;
  [key: string]: any;
}

const _window = window as any;

export default ({ login }: { login: ILogin }) => {
  const checkLoginStatus = useCallback(
    ({ authResponse, status }: IFBloginResult) => {
      if (status === 'connected') {
        const { accessToken, userId } = authResponse;

        login.setData({ accessToken, userId, loggedIn: true });
      }
    },
    [login]
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
