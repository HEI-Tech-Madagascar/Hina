import { Route, Routes } from 'react-router';
import { Auth, Home, Login } from '@/pages';

export default function App() {
  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}
