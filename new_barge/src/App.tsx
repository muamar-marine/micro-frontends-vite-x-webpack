import { Route, Routes } from 'react-router-dom';
import React from 'react';

const FinanceDebitNotePage = React.lazy(
  () => import('./pages/finance/debit-note')
);
const FinanceShipmentRecapPage = React.lazy(
  () => import('./pages/finance/shipment-recap')
);

const ProfileCargoOwnerPage = React.lazy(
  () => import('./pages/profiles/cargo-owner')
);
const ProfileVesselOwnerPage = React.lazy(
  () => import('./pages/profiles/vessel-owner')
);

function App() {
  return (
    <Routes>
      <Route path="f">
        <Route path="debit_note" element={<FinanceDebitNotePage />} />
        <Route path="shipment_recap" element={<FinanceShipmentRecapPage />} />
      </Route>

      <Route path="p">
        <Route path="cargo_owner" element={<ProfileCargoOwnerPage />} />
        <Route path="vessel_owner" element={<ProfileVesselOwnerPage />} />
      </Route>
    </Routes>
  );
}

export default App;
