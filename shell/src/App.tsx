import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';

const HomePage = React.lazy(() => import('./pages/home'));

// @ts-expect-error EXPECT
const NewBargePages = React.lazy(() => import('new_barge/NewBargeContent'));
// @ts-expect-error EXPECT
const OldBargePages = React.lazy(() => import('old_barge/OldBargeContent'));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route
          path="/*"
          element={
            <>
              <NewBargePages />
              <OldBargePages />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
