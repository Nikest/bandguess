import React from 'react';
import {sl} from '../../utils';

const c = sl(() => require('./Button.less'));

interface IProps {
  onClick?: () => void;
  children: React.ReactNode | string;
  small?: boolean;
}

export const Button: React.FC<IProps> = ({ onClick, children, small }) => {
  return (
    <button
      className={c(`button ${small ? 'small' : ''}`)}
      onClick={() => onClick ? onClick() : false}
    >
      { children }
    </button>
  );
}
