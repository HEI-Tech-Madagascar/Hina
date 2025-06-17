import { BrowserRouter, Route, Routes } from 'react-router';
import { Auth, Home, LandingPage, NotFoundPage } from '@/pages';
import { ProtectedRoute } from '@/components/protected-route';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
