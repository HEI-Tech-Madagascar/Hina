import { BrowserRouter, Route, Routes } from 'react-router';
import { Auth, Home } from '@/pages';
import { ProtectedRoute } from '@/components/protected-route';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
