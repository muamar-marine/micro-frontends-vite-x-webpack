import { Route, Routes } from 'react-router-dom';
import React from 'react';

import './App.css';

const ShipmentPage = React.lazy(() => import('./pages/shipment'));

function App() {
  return (
    <Routes>
      <Route path="shipment">
        <Route index element={<ShipmentPage />} />
      </Route>
    </Routes>
  );
}

export default App;
