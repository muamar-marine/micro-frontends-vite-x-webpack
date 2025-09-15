import './style.css';

import { Menu, Typography, version as antdVersion } from 'antd';
import { version as reactVersion, type FC } from 'react';
import { useLocation, type NavigateFunction } from 'react-router-dom';

type LayoutDefaultSiderProps = {
  nav?: NavigateFunction;
};

export const LayoutDefaultSider: FC<LayoutDefaultSiderProps> = ({ nav }) => {
  const { pathname } = useLocation();
  const defaultSelectedKeys = pathname.split('/').slice(1);

  const handleNav = (path: string) => {
    return nav?.(path);
  };

  return (
    <aside className="default_layout__sider">
      <div className="default_layout__sider__content">
        <div className="default_layout__sider__wrapper">
          <Menu
            defaultSelectedKeys={defaultSelectedKeys}
            defaultOpenKeys={defaultSelectedKeys}
            mode="inline"
            className="default_layout__sider__content__menu"
            items={[
              {
                key: 's',
                label: 'Shipment',
                children: [
                  {
                    key: 'shipment_request',
                    label: 'Shipment Request',
                    onClick: () => handleNav('/s/shipment_request'),
                  },
                  {
                    key: 'shipment',
                    label: 'Shipment',
                    onClick: () => handleNav('/s/shipment'),
                  },
                ],
              },
              {
                key: 'p',
                label: 'Profile',
                children: [
                  {
                    key: 'vessel_owner',
                    label: 'Vessel Owner',
                    onClick: () => handleNav('/p/vessel_owner'),
                  },
                  {
                    key: 'cargo_owner',
                    label: 'Cargo Owner',
                    onClick: () => handleNav('/p/cargo_owner'),
                  },
                ],
              },
              {
                key: 'f',
                label: 'Finance',
                children: [
                  {
                    key: 'shipment_recap',
                    label: 'Shipment Recap',
                    onClick: () => handleNav('/f/shipment_recap'),
                  },
                  {
                    key: 'debit_note',
                    label: 'Debit Note',
                    onClick: () => handleNav('/f/debit_note'),
                  },
                ],
              },
            ]}
          />
        </div>

        <div className="default_layout__sider__versioning">
          <Typography.Title
            level={5}
            style={{ color: '#ffffff', marginBottom: '0.5rem' }}>
            Versioning
          </Typography.Title>

          <p style={{ marginBottom: 0 }}>React V{reactVersion}</p>
          <p style={{ marginBottom: 0 }}>Ant Design V{antdVersion}</p>
        </div>
      </div>
    </aside>
  );
};
