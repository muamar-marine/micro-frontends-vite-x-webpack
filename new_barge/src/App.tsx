import { Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';

const LoginPage = React.lazy(() => import('./pages/auth/login'));
const RegisterPage = React.lazy(() => import('./pages/auth/register'));

const ProfilePage = React.lazy(() => import('./pages/profiles'));

function App() {
  return (
    <Routes>
      <Route path="auth">
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>

      <Route path="profile">
        <Route index element={<ProfilePage />} />
      </Route>
    </Routes>
  );
}

export default App;
