import './style.css';

import { Typography } from 'antd';
import LayoutDefault from '../../layouts/default';

const SettingPage = () => {
  return (
    <LayoutDefault>
      <Typography.Title level={2}>Settings Page</Typography.Title>
      <p style={{ marginBottom: 32 }}>
        This is the homepage for the proof-of-concept micro front-end. You are
        currently in the <code>shell</code> package using:
      </p>
    </LayoutDefault>
  );
};

export default SettingPage;
