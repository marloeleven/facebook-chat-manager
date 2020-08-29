import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@material-ui/core/Button';

import * as appActions from 'slices/app';

interface IButtonProps {
  id: string;
  title: string;
  status: string;
  onClick: Function;
}

const Video: React.FC<IButtonProps> = ({ id, title, status, onClick }) => (
  <li>
    <Button onClick={() => onClick(id)}>
      {status} :: {title}
    </Button>
  </li>
);

export default () => {
  const dispatch = useDispatch();
  const videos = useSelector(appActions.get.liveVideos);

  const selectPage = useCallback(
    (videoId: string) => dispatch(appActions.setLiveVideoId(videoId)),
    [dispatch]
  );

  return (
    <ul>
      {videos.map((video) => (
        <Video key={video.id} {...video} onClick={selectPage} />
      ))}
    </ul>
  );
};
