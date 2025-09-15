import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { type FC } from 'react';
import { App as Antd, ConfigProvider } from 'antd';

const HomePage = React.lazy(() => import('./pages/home'));

// @ts-expect-error EXPECT
const NewBargePages = React.lazy(() => import('new_barge/NewBargeContent'));
// @ts-expect-error EXPECT
const OldBargePages = React.lazy(() => import('old_barge/OldBargeContent'));

import 'antd/dist/reset.css';

type ThemeWrapperProps = {
  children?: React.ReactNode;
};

const ThemeWrapper: FC<ThemeWrapperProps> = ({ children }) => {
  return (
    <Antd>
      <ConfigProvider
        prefixCls="mt"
        theme={{
          token: {
            colorPrimary: '#00B96B',
            borderRadius: 8,
            colorLink: '#00B96B',
          },
          components: {
            Menu: {
              subMenuItemBg: 'transparent',
            },
          },
        }}>
        {children}
      </ConfigProvider>
    </Antd>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <ThemeWrapper>
              <HomePage />
            </ThemeWrapper>
          }
        />

        <Route
          path="/*"
          element={
            <>
              <ThemeWrapper>
                <NewBargePages />
              </ThemeWrapper>

              <OldBargePages />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
