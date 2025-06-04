import { Route, Routes } from 'react-router';
import Login from '@/pages/login';
import Home from '@/pages/home';
import Auth from '@/pages/auth';

export default function App() {
  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}
