import { Navigate, Route, Routes, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/Layout';
import Product from './pages/Product';
import UseCases from './pages/UseCases';
import Team from './pages/Team';
import BookDemo from './pages/BookDemo';
import DealRoom from './pages/DealRoom';
import CompanyDemoPage from './pages/CompanyDemoPage';
import { getCompanyDemoByHostname, getCompanyDemoBySlug } from './companyDemos/registry';

const PITCH_HOSTNAME = 'pitch.rapiddraft.ai';
const MAIN_SITE_ORIGIN = 'https://rapiddraft.ai';

function ExternalRedirect({ to }: { to: string }) {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);

  return null;
}

function CompanyDemoRoute() {
  const { slug } = useParams<{ slug: string }>();
  const companyDemo = slug ? getCompanyDemoBySlug(slug) : undefined;

  if (!companyDemo) {
    return <Navigate to="/" replace />;
  }

  return <CompanyDemoPage config={companyDemo} />;
}

function App() {
  const hostname = typeof window !== 'undefined' ? window.location.hostname : '';
  const isPitchHostname = hostname === PITCH_HOSTNAME;
  const companyDemoFromHostname = hostname ? getCompanyDemoByHostname(hostname) : undefined;

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

  if (companyDemoFromHostname && typeof window !== 'undefined' && window.location.pathname === '/') {
    return <CompanyDemoPage config={companyDemoFromHostname} isHostMode />;
  }

  return (
    <Routes>
      <Route path="/pilots/:slug" element={<CompanyDemoRoute />} />
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
