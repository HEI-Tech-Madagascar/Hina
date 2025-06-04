import { Route, Routes } from 'react-router';
import Login from './pages/login';
import Home from './pages/home';

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}
