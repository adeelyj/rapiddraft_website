import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Product from './pages/Product';
import UseCases from './pages/UseCases';
import Team from './pages/Team';
import BookDemo from './pages/BookDemo';
import JoinUs from './pages/JoinUs';

function App() {
  return (
    <Routes>
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
