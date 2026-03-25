import { Navigate, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/Layout';
import Product from './pages/Product';
import UseCases from './pages/UseCases';
import Team from './pages/Team';
import BookDemo from './pages/BookDemo';
import DealRoom from './pages/DealRoom';

const PITCH_HOSTNAME = 'pitch.rapiddraft.ai';
const MAIN_SITE_ORIGIN = 'https://rapiddraft.ai';

function ExternalRedirect({ to }: { to: string }) {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);

  return null;
}

function App() {
  const isPitchHostname = typeof window !== 'undefined' && window.location.hostname === PITCH_HOSTNAME;

  if (isPitchHostname) {
    const redirectPath =
      window.location.pathname === '/' || window.location.pathname === '/pitch' || window.location.pathname === '/how-it-works'
        ? '/'
        : window.location.pathname;
    const redirectTarget = `${MAIN_SITE_ORIGIN}${redirectPath}${window.location.search}${window.location.hash}`;

    return (
      <Routes>
        <Route path="*" element={<ExternalRedirect to={redirectTarget} />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Product />} />
        <Route path="how-it-works" element={<Navigate to="/" replace />} />
        <Route path="pitch" element={<Navigate to="/" replace />} />
        <Route path="deal-room" element={<DealRoom />} />
        <Route path="use-cases" element={<UseCases />} />
        <Route path="team" element={<Team />} />
        <Route path="book-demo" element={<BookDemo />} />
        <Route path="join-us" element={<Navigate to="/team#open-roles" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
