import './style.css';

import LayoutDefault from '../../layouts/default';
import { Typography, version as antdVersion } from 'antd';
import { version as reactVersion } from 'react';

const HomePage = () => {
  return (
    <LayoutDefault>
      <Typography.Title level={2}>Home Page</Typography.Title>
      <p>
        This is the homepage for the proof-of-concept micro front-end. You are
        currently in the <code>shell</code> package using:
      </p>

      <ul style={{ marginBottom: 32 }}>
        <li>
          <strong>React → v{reactVersion}</strong>
        </li>
        <li>
          <strong>Antd → V{antdVersion}</strong>
        </li>
      </ul>

      <Typography.Title level={4}>Packages</Typography.Title>
      <p>There are 4 packages in this app.</p>
      <ul style={{ marginBottom: 32 }}>
        <li>
          <strong>shell</strong> → Acts as a gateway for all packages.
        </li>
        <li>
          <strong>new_barge</strong> → Acts as a new module or for migrating
          modules.
        </li>
        <li>
          <strong>old_barge</strong> → Acts as an existing module that uses
          Webpack 5 and needs to be migrated to Vite.
        </li>
        <li>
          <strong>shared</strong> → Contains shared functions and components.
        </li>
      </ul>

      <Typography.Title level={4}>Notes</Typography.Title>
      <p>
        Please click the navigations in the sidebar for navigating to other
        pages or click the company logo on the left side of the header to come
        back here.
      </p>
    </LayoutDefault>
  );
};

export default HomePage;
