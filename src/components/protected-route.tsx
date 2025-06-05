import { Navigate } from 'react-router';
import { type ReactNode, useEffect, useState } from 'react';
import { getSession } from '@/lib/supabase/server';

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    getSession().then((session) => {
      setIsAuthenticated(!!session?.user);
    });
  }, []);

  if (isAuthenticated === null) {
    return <div>Chargement...</div>;
  }

  return isAuthenticated ? children : <Navigate to="/auth" replace />;
};
