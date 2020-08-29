import React from 'react';
import { Route } from 'react-router-dom';

import Login from 'containers/login';
import Page from 'containers/page';
import Video from 'containers/video';
import Message from 'containers/message';

interface IPage {
  exact?: boolean;
  path: string;
  component: React.ComponentClass<any, any> | React.FunctionComponent<any>;
}

const routes: IPage[] = [
  {
    path: '/messages',
    component: Message,
  },
  {
    path: '/videos',
    component: Video,
  },
  {
    path: '/pages',
    component: Page,
  },
  {
    exact: true,
    path: '/',
    component: Login,
  },
];

export default () => (
  <>
    {routes.map((route) => (
      <Route key={route.path} {...route} />
    ))}
  </>
);
