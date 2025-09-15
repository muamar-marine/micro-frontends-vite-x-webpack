import './style.css'

import { Avatar, Button, Dropdown } from 'antd';
import { Link, type NavigateFunction } from 'react-router-dom';
import companyLogo from '../../../../assets/logo.svg';
import type { FC } from 'react';

type LayoutDefaultHeaderProps = {
  nav?: NavigateFunction;
};

export const LayoutDefaultHeader: FC<LayoutDefaultHeaderProps> = ({ nav }) => {
  return (
    <header className="default_layout__header">
      <div className="default_layout__header__content">
        <Link to="/">
          <img src={companyLogo} className="logo" alt="React logo" />
        </Link>

        <Dropdown
          menu={{
            items: [
              {
                key: '1',
                label: 'Settings',
                onClick: () => {
                  nav?.('/settings');
                },
              },
              { key: 'div1', type: 'divider' },
              { key: '2', label: 'Logout' },
            ],
          }}
          trigger={['click']}>
          <Button className="default_layout__header__content__user" type="text">
            <Avatar
              style={{ backgroundColor: '#227d53', verticalAlign: 'middle' }}
              size={34}>
              J
            </Avatar>

            <div className="user-info">
              <p className="name">Johnny Joestar</p>
              <p className="email">johnny@steelballrun.com</p>
            </div>
          </Button>
        </Dropdown>
      </div>
    </header>
  );
};
