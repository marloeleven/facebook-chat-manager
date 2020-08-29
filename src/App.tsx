import React from 'react';

import Routes from 'app/routes';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: '5px',
    paddingTop: '10px',
  },
}));

export type IEventCallbackVoid = (event: any) => void;
interface IAppContext {}

export const AppContext = React.createContext<IAppContext>({});

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppContext.Provider value={{}}>
        <Routes />
      </AppContext.Provider>
    </div>
  );
};

export default App;
