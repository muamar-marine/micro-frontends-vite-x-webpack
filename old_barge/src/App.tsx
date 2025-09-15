import './App.css';
import 'antd/dist/antd.min.css';

import { Route, Routes } from 'react-router-dom';
import React from 'react';

import { ConfigProvider } from 'antd';

const ShipmentShipmentPage = React.lazy(
  () => import('./pages/shipment/shipment')
);
const ShipmentShipmentRequestPage = React.lazy(
  () => import('./pages/shipment/shipment-request')
);

function App() {
  return (
    <Routes>
      <Route path="s">
        <Route
          path="shipment"
          element={
            <ConfigProvider>
              <ShipmentShipmentPage />
            </ConfigProvider>
          }
        />
        <Route
          path="shipment_request"
          element={
            <ConfigProvider>
              <ShipmentShipmentRequestPage />
            </ConfigProvider>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
