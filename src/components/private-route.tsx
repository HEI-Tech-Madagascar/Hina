import { Navigate, Outlet } from 'react-router';
import { useEffect, useState } from 'react';
import { getSession } from '@/lib/supabase/auth';

export default function PrivateRoute() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    getSession().then((session) => {
      setIsAuthenticated(!!session?.user);
    });
  }, []);

  if (isAuthenticated === null) {
    return <div>Chargement...</div>;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
}
