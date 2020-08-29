import React, { useCallback, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import ListItemText from '@material-ui/core/ListItemText';

import { onMessages$, connected$ } from 'observables/messages';
import { IMessage } from 'types';
import useEffectOnce from 'hooks/useEffectOnce';
import { DummyMessages } from 'data/messages';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'block',
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

const Message: React.FC<IMessage> = ({ id, from, message, created_time }) => (
  <>
    <ListItem alignItems='flex-start'>
      <ListItemText
        primary={from.name}
        secondary={
          <>
            <Typography
              component='span'
              variant='subtitle2'
              className='inline'
              color='textPrimary'
            >
              {message}
            </Typography>
          </>
        }
      />
    </ListItem>
    <Divider component='li' />
  </>
);

export default () => {
  const [connected, setConnected] = useState<boolean>(false);
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [filter, setFilter] = useState<string>('');

  const classes = useStyles();

  const onChange = useCallback((event) => {
    setFilter(event.target.value);
  }, []);

  useEffectOnce(() => {
    onMessages$.subscribe((message) => {
      setMessages((messages) => {
        return [...messages.slice(-200), message];
      });
    });

    connected$.subscribe((bool) => setConnected(bool));
  });

  return (
    <>
      <TextField
        label='Filter Message'
        variant='outlined'
        value={filter}
        onChange={onChange}
      />
      <List className={classes.root}>
        {messages.map((message) => {
          if (filter.length && !message.message.includes(filter)) {
            return '';
          }

          return <Message key={message.id} {...message} />;
        })}
      </List>
    </>
  );
};
