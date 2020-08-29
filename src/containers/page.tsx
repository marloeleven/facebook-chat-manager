import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@material-ui/core/Button';

import * as appActions from 'slices/app';

interface IButtonProps {
  id: string;
  name: string;
  onClick: Function;
}

const Page: React.FC<IButtonProps> = ({ id, name, onClick }) => (
  <li>
    <Button onClick={() => onClick(id)}>{name}</Button>
  </li>
);

export default () => {
  const dispatch = useDispatch();
  const pages = useSelector(appActions.get.pages);

  const selectPage = useCallback(
    (pageId: string) => dispatch(appActions.setPageId(pageId)),
    [dispatch]
  );

  return (
    <ul>
      {pages.map((page) => (
        <Page key={page.id} {...page} onClick={selectPage} />
      ))}
    </ul>
  );
};
