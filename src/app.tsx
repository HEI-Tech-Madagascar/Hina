import { ClubLife, ForgetPassword, Home, LandingPage, Login, Message, NotFound, Register, StudentLife } from '@/pages';
import { PrivateRoute } from '@/components';
import { BrowserRouter, Route, Routes } from 'react-router';
import { AppLayout, AuthLayout } from '@/layouts';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forget-password" element={<ForgetPassword />} />
        </Route>

        <Route path="app" element={<PrivateRoute />}>
          <Route element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="club-life" element={<ClubLife />} />
            <Route path="student-life" element={<StudentLife />} />
            <Route path="messages" element={<Message />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
