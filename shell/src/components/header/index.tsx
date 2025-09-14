import type { FC } from 'react';

type HeaderProps = {
  title?: string;
};

export function Header({
  title = 'UNKNOWN',
}: HeaderProps): ReturnType<FC<HeaderProps>> {
  return <h1>HEADER DESU: {title}</h1>;
}
