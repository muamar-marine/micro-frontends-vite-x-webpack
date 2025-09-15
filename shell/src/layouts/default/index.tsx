import './style.css'

import type { FC, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { LayoutDefaultHeader } from './subcomponents/header';
import { LayoutDefaultSider } from './subcomponents/sider';

type LayoutDefaultProps = {
  children?: ReactNode;
};

const LayoutDefault: FC<LayoutDefaultProps> = ({ children }) => {
  const nav = useNavigate();
  return (
    <main className="default_layout">
      <LayoutDefaultHeader nav={nav} />
      <section className="default_layout__body">
        <LayoutDefaultSider nav={nav} />
        <section className="default_layout__body__content">{children}</section>
      </section>
    </main>
  );
};

export default LayoutDefault;
