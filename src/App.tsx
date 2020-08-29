import React, { Suspense, useEffect, useState } from 'react';

import Loader from 'containers/loader';
import PageList, { IPage } from 'containers/pagelist';
import FBLoginButton from 'components/FBLogin';

import { makeStyles } from '@material-ui/core/styles';
import { ILogin } from 'contexts/login';

import fbApi from 'api/fb';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
}));

interface IAppProps {
  login: ILogin;
}

const App: React.FC<IAppProps> = ({ login }) => {
  const classes = useStyles();
  const [pages, setPages] = useState<IPage[]>([]);
  const [selectedPage, setSelectedPage] = useState<string>('');

  useEffect(() => {
    (async () => {
      if (login.state.loggedIn) {
        const { data: pages } = await fbApi.getPages(login.state.accessToken);

        setPages(pages);
      }
    })();
  }, [login.state, setPages]);

  return (
    <div className={classes.root}>
      <Suspense fallback={<Loader />}></Suspense>
      {pages.length && (
        <PageList pages={pages} setSelectedPage={setSelectedPage} />
      )}
      {login.state.loggedIn && <FBLoginButton login={login} />}
    </div>
  );
};

export default App;
