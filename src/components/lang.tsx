import React from 'react';
interface ILangComponent {
  children: JSX.Element;
  defaultValue?: string;
}

export default ({ defaultValue = '', ...props }: ILangComponent) =>
  props.children;
