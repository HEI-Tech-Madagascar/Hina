import { Route, Routes } from 'react-router';
import Login from './pages/Login';
import Home from './pages/Home';

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}
