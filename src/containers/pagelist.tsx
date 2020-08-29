import React from 'react';

export interface IPage {
  name: string;
  id: string;
  access_token: string;
}

interface IPageListProps {
  pages: IPage[];
  setSelectedPage: Function;
}

interface IPageProps {
  id: string;
  name: string;
  onClick: Function;
}

const Page: React.FC<IPageProps> = ({ id, name, onClick }) => (
  <span onClick={() => onClick(id)}>{name}</span>
);

export default ({ pages, setSelectedPage }: IPageListProps) => {
  return (
    <ul>
      {pages.map((page) => (
        <Page {...page} onClick={setSelectedPage} />
      ))}
    </ul>
  );
};
