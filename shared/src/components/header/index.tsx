import type { FC } from 'react';

type HeaderProps = {
  title?: string;
};

const Header: FC<HeaderProps> = ({ title = 'COMP' }) => {
  return <h1>HEADER DESU: {title}</h1>;
};

export default Header;
