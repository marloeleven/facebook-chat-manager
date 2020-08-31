import React, { useCallback, useState, useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

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

interface IMessageProps extends IMessage {
  onClick: Function;
}

const Message: React.FC<IMessageProps> = ({
  id,
  from,
  message,
  created_time,
  onClick,
}) => {
  const onClickEvent = useCallback(() => {
    onClick({
      id,
      from,
      message,
      created_time,
    });
  }, [onClick, id, from, message, created_time]);

  return (
    <>
      <ListItem alignItems='flex-start' onClick={onClickEvent}>
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
};

const MessageList: React.FC<{
  messages: IMessage[];
  className: string;
  onClick: Function;
}> = ({ messages, className, onClick }) => (
  <List className={className}>
    {messages.map((message) => (
      <Message key={message.id} {...message} onClick={onClick} />
    ))}
  </List>
);

export default () => {
  const [connected, setConnected] = useState<boolean>(false);
  const [messages, setMessages] = useState<IMessage[]>(DummyMessages);
  const [savedMessages, setSavedMessages] = useState<IMessage[]>([]);
  const [filter, setFilter] = useState<string>('');

  const classes = useStyles();

  const onChange = useCallback((event) => {
    setFilter(event.target.value);
  }, []);

  const onSaveMessage = useCallback((message: IMessage) => {
    setSavedMessages((messages) => {
      if (messages.find(({ id }) => id === message.id)) {
        return messages;
      }

      return [...messages, message];
    });
  }, []);

  const onDeleteMessage = useCallback((message: IMessage) => {
    setSavedMessages((messages) =>
      messages.filter(({ id }) => id !== message.id)
    );
  }, []);

  const filteredMessages = useMemo(
    () =>
      messages.filter(({ message }) => {
        if (filter.trim().length) {
          return message.includes(filter);
        }

        return true;
      }),
    [messages, filter]
  );

  useEffectOnce(() => {
    onMessages$.subscribe((message) => {
      setMessages((messages) => {
        return [...messages.slice(-300), message];
      });
    });

    connected$.subscribe((bool) => setConnected(bool));
  });

  return (
    <Grid container spacing={0}>
      <Grid container spacing={0} xs={4} className='flex-col'>
        <TextField
          label='Filter Message'
          variant='outlined'
          value={filter}
          onChange={onChange}
        />
        <MessageList
          className={classes.root}
          messages={filteredMessages}
          onClick={onSaveMessage}
        />
      </Grid>
      <Grid container spacing={0} xs={4} className='flex-col'>
        <Typography
          component='span'
          variant='subtitle2'
          className='inline'
          color='textPrimary'
        >
          Saved Messages
        </Typography>
        <MessageList
          className={classes.root}
          messages={savedMessages}
          onClick={onDeleteMessage}
        />
      </Grid>
    </Grid>
  );
};

/*


if (filter.length && !message.message.includes(filter)) {
  return '';
}
*/
