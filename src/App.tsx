import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/Layout';
import Product from './pages/Product';
import UseCases from './pages/UseCases';
import Team from './pages/Team';
import BookDemo from './pages/BookDemo';
import JoinUs from './pages/JoinUs';
import Pitch from './pages/Pitch';

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
    const redirectTarget = `${MAIN_SITE_ORIGIN}${window.location.pathname}${window.location.search}${window.location.hash}`;

    return (
      <Routes>
        <Route path="/" element={<Pitch />} />
        <Route path="*" element={<ExternalRedirect to={redirectTarget} />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/pitch" element={<Pitch />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Product />} />
        <Route path="use-cases" element={<UseCases />} />
        <Route path="team" element={<Team />} />
        <Route path="book-demo" element={<BookDemo />} />
        <Route path="join-us" element={<JoinUs />} />
      </Route>
    </Routes>
  );
}

export default App;
